## Answers

Can an intrusion detection system (IDS) prevent the threat after it detects it? Yea/Nay
**Nay**

Which type of IDS is deployed to detect threats throughout the network?
**Network Intrusion Detection System**

Which IDS leverages both signature-based and anomaly-based detection techniques?
**Hybrid IDS**

Which mode of Snort helps us to log the network traffic in a PCAP file?
**Packet Logging Mode**

What is the primary mode of Snort called?
**Network Intrusion Detection System Mode**

Where is the main directory of Snort that stores its files?
**/etc/snort**

Which field in the Snort rule indicates the revision number of the rule?
**rev**

Which protocol is defined in the sample rule created in the task?
**icmp**

What is the file name that contains custom rules for Snort?
**local.rules**

What is the IP address of the machine that tried to connect to the subject machine using SSH?
**10.11.90.211**

What other rule message besides the SSH message is detected in the PCAP file?
**Ping Detected**

What is the sid of the rule that detects SSH?
**1000002**

## Things You Should Know

An Intrusion Detection System (IDS) is like survellance cameras that can detect problems and malicious activity but they cannot act to stop it.

### Types of Intrusion Detection Systems

**Host Intrusion Detection System (HIDS):** A host-based solution that is installed on individual hosts/networks that are responsible for only detecting potential security threats associated with that host. They are detailed with data but difficult to manage in large networks.

**Network Intrusion Detection System (NIDS):** A network-based solution that is crucial in detecting potentially malicious activities within a whole network. They monitor the network traffic of all hosts on the network to detect suspicious activities. NIDS directs all the detection in the whole network to one centralized location to be viewed.

### IDS Detection Modes

**Signature-Based IDS:** Different cyber attacks have unique patterns that are stored in a database so the IDS can detect attacks that have been executed previously somewhere else. Signature-Based IDS cannot detect zero-day attacks which are attacks that have never been used before. Snort is an example of a Signature-Based IDS

**Anomaly-Based IDS:** This type of IDS learns the normal behavior of the network/system and preforms detections to find deviations or anomalies in the normal behavior. 




