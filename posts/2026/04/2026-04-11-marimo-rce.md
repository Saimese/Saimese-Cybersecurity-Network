# Deep-Dive: Marimo RCE Flaw (CVE-2026-39987) Exploited Within 10 Hours

## Overview
On April 10, 2026, a critical security vulnerability in Marimo (CVE-2026-39987), an open-source Python notebook for data science, was exploited by threat actors less than 10 hours after its public disclosure. This vulnerability allows for pre-authenticated remote code execution (RCE) with a CVSS score of 9.3.

## Technical Analysis
The vulnerability stems from a lack of authentication validation on the `/terminal/ws` WebSocket endpoint. 

### The Root Cause
Marimo uses WebSockets for various interactive features. While most endpoints (like `/ws`) correctly implement `validate_auth()` to verify user identity, the `/terminal/ws` endpoint was found to skip this check. 

Instead of validating credentials, the endpoint only verified:
1. The current running mode of the application.
2. Platform support for terminal features.

### Exploitation Vector
An unauthenticated attacker can connect to the `/terminal/ws` endpoint and obtain a full pseudo-terminal (PTY) shell. Because the application runs with the permissions of the user who started the Marimo server, the attacker can execute arbitrary system commands, effectively gaining full control over the host environment where the notebook is running.

## Impact
- **Immediate Exploitation:** Reports from Sysdig indicate active exploitation began within 10 hours of the CVE being published.
- **Scope:** Impacted all versions of Marimo prior to and including 0.20.4.
- **Targeting:** Data scientists and researchers often run these notebooks on local machines or cloud instances with sensitive data and credentials stored in environment variables or configuration files.

## Remediation
The vulnerability has been addressed in **Marimo version 0.23.0**. 

### Recommendations
1. **Update Immediately:** All users should upgrade to Marimo 0.23.0 or later.
2. **Network Segmentation:** Ensure that development environments and notebook servers are not exposed directly to the internet without additional layers of authentication (e.g., VPN, reverse proxy with Auth).
3. **Audit Logs:** Check for unexpected WebSocket connections to the `/terminal/ws` endpoint in server logs from the past 48 hours.

---
*Sources: The Hacker News, Sysdig Research, Marimo Security Advisory.*
