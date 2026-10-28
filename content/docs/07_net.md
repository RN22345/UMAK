# 07 · Computer Networks & Telecommunication
*Layers, addressing, ports and devices. Basics covers the elimination round; the deeper sections hold the acronym/port/standard tables for finals identification.*

> **How to use this page.** Start with **Basics**: that is what the elimination round tests. The sections after it
> are the deeper detail for the finals (identification, average/difficult). Tip: layer-to-PDU-to-device and the common ports are the most reusable facts.

---

## Basics

### OSI & TCP/IP
- **OSI model = 7 layers** (top→bottom): Application, Presentation, Session, Transport, Network, Data Link, Physical. **TCP/IP model = 4 layers.**

| Layer | Job | PDU |
|---|---|---|
| **Physical (1)** | raw **bits** over cables/signals | Bits |
| **Data Link (2)** | **MAC addresses**, framing | **Frame** |
| **Network (3)** | **logical addressing (IP) and routing** | **Packet** |
| **Transport (4)** | end-to-end delivery, **ports**, reliability | **Segment** (TCP) |
| **Session (5)** | establishes, maintains, terminates sessions | Data |
| **Presentation (6)** | **encryption, compression, data formats** | Data |

- **Switch** works at **Layer 2**; **router** at **Layer 3**; hub/repeater at Layer 1. Switch forwards frames by MAC address and connects devices in a LAN.

### Network types, topologies & modes
- **LAN** = Local Area Network; **MAN** = spans a **city**; WAN = wide area (the Internet).
- **Star** = every node connected to a central device; **most common in LANs**. **Bus** = single backbone cable; **one cable break brings the network down**.
- **Simplex** = one direction only (keyboard→computer, broadcast TV). **Half-duplex** = both directions, **not simultaneously** (walkie-talkie). Full-duplex = both at once.

### Addressing
- **MAC address = 48 bits**. **IPv4 = 32 bits**. **IPv6 = 128 bits**. IPv4 **loopback = 127.0.0.1**.
- **/24** network = **254 usable hosts** (hosts = 2ʰ − 2).
- **ARP** resolves **IP → MAC**. **DHCP** assigns IP addresses automatically; steps **DORA** = **Discover, Offer, Request, Acknowledge**.
- **DNS** translates domain names to IP addresses. Records: **A** = IPv4 address · **AAAA** = IPv6 address · **MX** = mail server.
- **ICMP** is used by **ping**. **NAT** translates **private addresses to public** addresses.

### Transport & application protocols
- **TCP** = connection-oriented, reliable. **UDP** = connectionless, faster, less overhead.
- **TCP three-way handshake:** **SYN → SYN-ACK → ACK**.

| Port | Protocol |
|---|---|
| **80** | HTTP |
| **443** | HTTPS |
| **53** | DNS |
| **22** | SSH |

- **Email:** **SMTP** sends mail · **POP3** downloads (often deletes from server) · **IMAP** keeps messages synchronized on the server across devices.
- **HTTP status:** **200 OK** · **404 Not Found** · **500 Internal Server Error** · **3xx = redirection**.

### Routing, switching & Ethernet/Wi-Fi
- **OSPF** = link-state routing protocol using **Dijkstra**. **BGP** = routes traffic between **Autonomous Systems** (the Internet).
- **STP** (Spanning Tree Protocol) prevents switching loops.
- **IEEE 802.3** = Ethernet · **IEEE 802.11** = Wi-Fi. Most secure Wi-Fi security: **WPA3**.

### Cabling, mobile & tools
- Max twisted-pair Ethernet segment = **100 meters**. **RJ-45** = Ethernet connector; **RJ-11** = traditional telephone line connector.
- **Fiber optic** = light pulses, **immune to EMI**.
- **2G** introduced digital voice + **SMS** with **GSM**; **4G** is based on **LTE**.
- **`tracert`** (Windows) = path packets take · **`ipconfig`** = IP configuration · **`nslookup`** = query DNS records.
- **Wireshark** = packet capture/analyzer · **Nmap** = popular port scanner.

---

## Network types & topologies
- **Network** = interconnected devices sharing data/resources. Components: nodes/hosts, NICs, media, switches/routers, protocols, OS.
- **By scope:** **PAN** (personal; Bluetooth) · **LAN** (building) · **CAN** (campus) · **MAN** (city) · **WAN** (wide; the Internet is the largest) · **WLAN** · **SAN** (storage area network) · **VPN** (virtual private network) · **GAN**.
- **Models:** **Client–server** (central servers) vs **Peer-to-peer (P2P)** (BitTorrent). **Intranet/Extranet/Internet**.
- **Topologies:** **Bus** (single backbone; terminators; cable break kills network), **Star** (central switch/hub; most common; single point of failure = center), **Ring** (token passing), **Mesh** (full mesh links = n(n−1)/2; redundant, expensive), **Tree/Hierarchical**, **Hybrid**, **Point-to-point**. *Physical* (layout) vs *logical* (data flow).
- **Transmission modes:** **Simplex** (one-way: TV, keyboard) · **Half-duplex** (two-way, not simultaneous: walkie-talkie, hubs) · **Full-duplex** (simultaneous: phone, switched Ethernet).
- **Delivery:** **Unicast** (1-to-1) · **Multicast** (1-to-group) · **Broadcast** (1-to-all in a domain) · **Anycast** (to nearest).
- **Performance:** **Bandwidth** (max capacity, bps) · **Throughput** (actual) · **Latency/delay** · **Jitter** · **Packet loss** · RTT. Units: bps, Kbps, Mbps, Gbps (1 byte = 8 bits; 100 Mbps ≈ 12.5 MB/s).
- **Switching:** **Circuit** (dedicated path; PSTN), **Packet** (Internet; datagram/virtual circuit), **Message**.
- **Standards bodies:** **IEEE** (802 standards), **IETF** (RFCs), **ISO**, **ITU-T**, **ANSI/TIA/EIA**, **W3C**, **ICANN/IANA** (names & numbers), **ISOC**, **APNIC** (Asia-Pacific address registry), **NTC** (National Telecommunications Commission, PH), **DICT** (Dept. of Information and Communications Technology, PH).

## OSI & TCP/IP models
### OSI model (7 layers, top→bottom)
Mnemonic (top-down): **All People Seem To Need Data Processing** · (bottom-up): **Please Do Not Throw Sausage Pizza Away**.
| # | Layer | PDU | Function | Examples / devices |
|---|---|---|---|---|
| 7 | **Application** | Data | network services to apps | HTTP, FTP, SMTP, DNS, DHCP, Telnet, SSH |
| 6 | **Presentation** | Data | translation, encryption, compression, formats | SSL/TLS (arguably), JPEG, MPEG, ASCII, MIME |
| 5 | **Session** | Data | establish/maintain/terminate sessions, dialog control, sync | NetBIOS, RPC, SQL sessions |
| 4 | **Transport** | **Segment** (TCP) / **Datagram** (UDP) | end-to-end delivery, ports, reliability, flow & error control | TCP, UDP |
| 3 | **Network** | **Packet** | logical addressing (IP), routing | IP, ICMP, IPsec, OSPF; **Router**, L3 switch |
| 2 | **Data Link** | **Frame** | physical addressing (MAC), framing, error detection, access control (LLC + MAC sublayers) | Ethernet, PPP, ARP*, VLAN; **Switch, Bridge, NIC** |
| 1 | **Physical** | **Bits** | signals, cables, connectors, voltage | Hub, repeater, cables, modem |
- *ARP is often placed between layers 2/3.
- **Encapsulation** (sender adds headers going down) / **decapsulation** (receiver strips). Peer-to-peer layer communication.

### TCP/IP model (4 layers)
**Application** (OSI 5–7) · **Transport** (OSI 4) · **Internet** (OSI 3) · **Network Access / Link** (OSI 1–2). (5-layer hybrid model splits Link and Physical.)

## Network devices
| Device | Layer | Notes |
|---|---|---|
| **Repeater** | 1 | regenerates signal |
| **Hub** | 1 | multiport repeater; one collision domain; half-duplex; broadcasts everywhere |
| **Bridge** | 2 | connects LAN segments, filters by MAC |
| **Switch** | 2 (L3 for multilayer) | learns MAC addresses (CAM table); each port = own collision domain; same broadcast domain unless VLANs |
| **Router** | 3 | connects different networks; routing table; each interface = own broadcast domain |
| **Gateway** | up to 7 | protocol translation between different networks |
| **Firewall** | 3–7 | traffic filtering (packet filter, stateful, NGFW, WAF) |
| **Modem** | 1 | modulator/demodulator (DSL, cable, fiber ONT) |
| **Access Point (AP)** | 2 | wireless to wired bridge |
| **NIC** | 1/2 | has MAC address |
| **Load balancer, proxy, IDS/IPS, NAS, PoE switch, repeater/extender** | | |
- **Collision domain** vs **broadcast domain**: switch splits collision domains; router (or VLAN) splits broadcast domains.

## Addressing, DHCP & DNS
### MAC (physical)
- 48 bits (6 bytes), hex, e.g., `00:1A:2B:3C:4D:5E`. First 24 bits = **OUI** (vendor), last 24 = NIC-specific. Broadcast = `FF:FF:FF:FF:FF:FF`.

### IPv4
- 32 bits, 4 octets (dotted decimal) → ~4.29 billion addresses (exhausted; APNIC ran out 2011).
- **Classes:** 
  | Class | First octet | Default mask | Notes |
  |---|---|---|---|
  | A | 1–126 | /8 (255.0.0.0) | 16,777,214 hosts |
  | B | 128–191 | /16 (255.255.0.0) | 65,534 hosts |
  | C | 192–223 | /24 (255.255.255.0) | 254 hosts |
  | D | 224–239 | – | multicast |
  | E | 240–255 | – | experimental |
  127.x.x.x = **loopback** (127.0.0.1 localhost).
- **Private ranges (RFC 1918):** `10.0.0.0/8`, `172.16.0.0/12` (172.16–172.31), `192.168.0.0/16`. **APIPA** `169.254.0.0/16` (no DHCP found). Public = everything else. Broadcast `255.255.255.255`.
- **Network ID** (host bits all 0) and **broadcast address** (host bits all 1) can't be assigned. **Usable hosts = 2ʰ − 2**; subnets = 2ⁿ (n borrowed bits).
- **CIDR** notation `/n`. Cheat table:
  | CIDR | Mask | Block size | Usable hosts |
  |---|---|---|---|
  | /24 | 255.255.255.0 | 256 | 254 |
  | /25 | …128 | 128 | 126 |
  | /26 | …192 | 64 | 62 |
  | /27 | …224 | 32 | 30 |
  | /28 | …240 | 16 | 14 |
  | /29 | …248 | 8 | 6 |
  | /30 | …252 | 4 | 2 (point-to-point) |
  | /31 | …254 | 2 | 2 (RFC 3021 links) |
  | /32 | …255 | 1 | single host |
  - Example: 192.168.10.77/26 → block 64 → network 192.168.10.64, broadcast 192.168.10.127, hosts .65–.126.
  - Example: 172.16.5.9/20 → mask 255.255.240.0; block 16 in 3rd octet → network 172.16.0.0, broadcast 172.16.15.255.
  - **VLSM** (variable length subnet masks), **supernetting/route summarization**, wildcard mask (inverse; used in ACL/OSPF).
- **NAT** (Network Address Translation) lets private hosts share one public IP; **PAT/NAT overload** uses ports. **Default gateway** = router IP for off-network traffic.

### IPv6
- **128 bits**, written as 8 groups of 4 hex digits (`2001:0db8:0000:0000:0000:ff00:0042:8329`). Compression: drop leading zeros; `::` replaces one run of zeros (`2001:db8::ff00:42:8329`). ≈ 3.4×10³⁸ addresses. **No broadcast** (uses multicast/anycast); **loopback `::1`**; link-local `fe80::/10`; unique local `fc00::/7`; global unicast `2000::/3`. Header fixed 40 bytes; built-in IPsec support; SLAAC auto-config; NDP replaces ARP. Transition: dual stack, tunneling, translation (NAT64).

### Other
- **ARP** (Address Resolution Protocol) = IP → MAC; **RARP** reverse. **ICMP** = error/diagnostic (ping uses Echo Request/Reply; traceroute uses TTL). **TTL** decrements per hop → prevents loops. **MTU** = 1500 bytes for Ethernet.
- **DHCP (Dynamic Host Configuration Protocol):** auto-assigns IP/mask/gateway/DNS. Process **DORA**: **D**iscover → **O**ffer → **R**equest → **A**cknowledge. Server UDP 67, client UDP 68. Lease time; reservation; scope.
- **DNS (Domain Name System):** name → IP; UDP/TCP 53; hierarchy: root (.) → TLD (.com, .org, .ph) → authoritative. 13 logical root servers (A–M). **Records:** A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), NS (name server), PTR (reverse), TXT (SPF/DKIM verification), SOA, SRV. Resolver, caching, recursive vs iterative queries. Popular public DNS: Google 8.8.8.8, Cloudflare 1.1.1.1, Quad9 9.9.9.9.

## Transport: TCP vs UDP
| | **TCP** | **UDP** |
|---|---|---|
| Connection | connection-oriented (3-way handshake) | connectionless |
| Reliability | reliable, ordered, retransmission, ack | best-effort, no guarantee |
| Speed/overhead | slower, header ≥ 20 B | faster, 8 B header |
| Flow/congestion control | yes (sliding window, slow start) | no |
| Uses | web, email, file transfer, SSH | DNS queries, streaming, VoIP, gaming, DHCP, TFTP, QUIC/HTTP3 |
- **3-way handshake:** SYN → SYN-ACK → ACK. Termination uses FIN/ACK (4-way). Socket = IP + port. **Ports** 16-bit (0–65,535): **well-known 0–1023**, registered 1024–49,151, dynamic/ephemeral 49,152–65,535.

## Application protocols & ports
| Port | Protocol | Notes |
|---|---|---|
| 20/21 | **FTP** (data/control) | plaintext; SFTP uses 22; FTPS 990 |
| 22 | **SSH** / SFTP / SCP | secure remote shell |
| 23 | **Telnet** | insecure remote login |
| 25 | **SMTP** | send/relay mail (587 submission, 465 SMTPS) |
| 53 | **DNS** | |
| 67/68 | **DHCP** | server/client |
| 69 | **TFTP** | UDP |
| 80 | **HTTP** | |
| 110 | **POP3** | download mail (995 POP3S) |
| 123 | **NTP** | time sync (UDP) |
| 143 | **IMAP** | sync mail (993 IMAPS) |
| 161/162 | **SNMP** | monitoring / traps |
| 179 | **BGP** | |
| 389 / 636 | **LDAP / LDAPS** | directory |
| 443 | **HTTPS** | HTTP over TLS |
| 445 | **SMB** | Windows file sharing |
| 514 | Syslog | |
| 1433 / 3306 / 5432 / 1521 / 27017 / 6379 | MS SQL / MySQL / PostgreSQL / Oracle / MongoDB / Redis | |
| 3389 | **RDP** | Remote Desktop |
| 5060/5061 | **SIP** (VoIP) | |
- **HTTP methods:** GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS. **Status codes:** 1xx info · **2xx success** (200 OK, 201 Created, 204 No Content) · **3xx redirect** (301 Moved Permanently, 302 Found, 304 Not Modified) · **4xx client error** (400 Bad Request, 401 Unauthorized, 403 Forbidden, **404 Not Found**, 405, 408, 429 Too Many Requests) · **5xx server error** (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout). *(418 "I'm a teapot" is an April Fools RFC.)*
- HTTP versions: 1.0, 1.1 (persistent connections), **2** (multiplexing, binary, 2015), **3** (over **QUIC**/UDP, 2022). **TLS 1.3** (2018). **HTTPS** = HTTP + TLS (successor of SSL).
- Email: **SMTP** sends; **POP3** downloads (usually deletes from server); **IMAP** syncs; **MIME** for attachments; SPF/DKIM/DMARC anti-spoofing.
- **Telnet vs SSH:** SSH encrypts. **VoIP:** SIP (signaling), RTP (media), codecs G.711/G.729/Opus. **Streaming:** RTSP, HLS, MPEG-DASH, WebRTC. **MQTT** (IoT pub/sub, 1883/8883). **SNMP** manage devices. **Syslog**. **RADIUS/TACACS+** (AAA). **Kerberos** (88). **NFS**. **RDP/VNC**.

## Routing & switching · finals
- **Routing:** static (manual) vs dynamic. **Metric**, **administrative distance (AD)** (lower = more trusted: connected 0, static 1, EIGRP 90, **OSPF 110**, **RIP 120**).
  - **RIP** – distance-vector, **hop count (max 15; 16 = unreachable)**, v1/v2; **OSPF** – link-state, Dijkstra SPF, cost based on bandwidth, areas (Area 0 backbone), open standard; **EIGRP** – Cisco advanced distance-vector/hybrid; **BGP** – path-vector, exterior gateway protocol between **Autonomous Systems (AS)**, routes the Internet; **IGP** (inside AS) vs **EGP**.
  - Longest prefix match; default route `0.0.0.0/0`.
- **Switching concepts:** MAC learning/flooding/forwarding/filtering; **VLAN** (IEEE **802.1Q** tagging; trunk vs access ports; inter-VLAN routing/"router on a stick"); **STP** (Spanning Tree Protocol, IEEE 802.1D; prevents loops; root bridge; RSTP 802.1w); **EtherChannel/LACP (802.3ad)**; **port security**; **PoE (802.3af/at/bt)**; **QoS**; **ACL**; **SDN** (separate control/data plane; OpenFlow); **SD-WAN**; **MPLS**.
- **Cisco IOS modes:** User EXEC `>` → Privileged EXEC `#` (`enable`) → Global config `(config)#` (`configure terminal`) → interface config `(config-if)#`. Commands: `show ip route`, `show running-config`, `copy running-config startup-config`, `ping`, `ip address`, `no shutdown`. Simulator: **Cisco Packet Tracer**.

## Cabling & Ethernet
- **Twisted pair:** UTP/STP; twisting reduces crosstalk/EMI. **Cat5e** (1 Gbps, 100 m), **Cat6** (1 Gbps 100 m; 10 Gbps ≤ 55 m), **Cat6a** (10 Gbps 100 m), Cat7/Cat8 (25/40 Gbps short). Max segment **100 m**. Connector **RJ-45** (8P8C) (RJ-11 = telephone line); wiring **T568A / T568B**; **straight-through** (different devices: PC↔switch) vs **crossover** (same devices: PC↔PC, switch↔switch; modern auto-MDIX). **Rollover** (console).
- **Coaxial**: RG-6 (cable TV), RG-58 (10Base2 thinnet), BNC connector.
- **Fiber optic:** light pulses in glass; **single-mode** (SMF; laser; long distance km; 9 µm core) vs **multi-mode** (MMF; LED/VCSEL; short; 50/62.5 µm core). Connectors LC, SC, ST, MPO. Immune to EMI, high bandwidth, secure. **FTTH/FTTx** with **PON** (GPON/XGS-PON), **ONT**. 
- **Ethernet:** IEEE **802.3**; designed by **Robert Metcalfe** (Xerox PARC, 1973). Standards: 10BASE-T, 100BASE-TX (Fast Ethernet), 1000BASE-T (Gigabit), 10GBASE-T, 25/40/100/400G. **Frame:** preamble, dest MAC, src MAC, type/length, data (46–1500 B), **FCS/CRC**. **CSMA/CD** (collision detection; wired, half-duplex) vs **CSMA/CA** (collision avoidance; Wi-Fi 802.11). **Token Ring** IEEE 802.5; **FDDI**.
- **Wireless:** radio waves, microwaves (line of sight), infrared, satellite (GEO ~35,786 km high latency; **LEO** e.g., **Starlink** by SpaceX, Amazon Kuiper/“Leo”), Bluetooth (2.4 GHz, IEEE 802.15.1), Zigbee (802.15.4), NFC, RFID, LoRa/LoRaWAN.

## Wi-Fi (IEEE 802.11) · finals
| Standard | Marketing name | Band | Max (theoretical) |
|---|---|---|---|
| 802.11b | – | 2.4 GHz | 11 Mbps |
| 802.11a | – | 5 GHz | 54 Mbps |
| 802.11g | – | 2.4 GHz | 54 Mbps |
| 802.11n | **Wi-Fi 4** | 2.4/5 | 600 Mbps (MIMO) |
| 802.11ac | **Wi-Fi 5** | 5 GHz | ~3.5 Gbps (MU-MIMO) |
| 802.11ax | **Wi-Fi 6 / 6E** (6E adds 6 GHz) | 2.4/5/(6) | ~9.6 Gbps (OFDMA) |
| 802.11be | **Wi-Fi 7** | 2.4/5/6 | ~46 Gbps (320 MHz, MLO, 4K-QAM) |
| 802.11bn | Wi-Fi 8 (in development, "Ultra High Reliability") | | |
- Non-overlapping 2.4 GHz channels: **1, 6, 11**. **SSID** = network name. **BSSID** = AP MAC. Modes: infrastructure vs ad-hoc. **Roaming**, **mesh**, **captive portal**, **WPS**.
- **Wi-Fi security:** WEP (broken) → WPA (TKIP) → **WPA2** (AES-CCMP; 2004) → **WPA3** (SAE, 2018; stronger against offline dictionary). Enterprise 802.1X/RADIUS.
- Wi-Fi Alliance trademark; name "Wi-Fi" has no real expansion (pun on Hi-Fi).

## Telecom & mobile · finals
- **Signals:** analog (continuous) vs digital (discrete). **Modulation:** AM, FM, PM; digital ASK, FSK, PSK, QAM. **Multiplexing:** **FDM** (frequency), **TDM** (time), **WDM** (wavelength; fiber), CDM/CDMA, OFDM. **Baud rate** vs bit rate. **Nyquist** (noiseless), **Shannon** (noisy: C = B·log₂(1+S/N)). Attenuation, noise, interference, crosstalk, distortion; units **dB**.
- **Error detection/correction:** parity bit, checksum, **CRC**, **Hamming code** (corrects single-bit), FEC; ARQ (stop-and-wait, go-back-N, selective repeat); sliding window.
- **PSTN**, POTS, **ISDN**, T1 (1.544 Mbps)/E1 (2.048 Mbps), **DSL/ADSL** (over phone line; asymmetric), cable broadband (DOCSIS), fiber, fixed wireless, satellite, **PON**, leased lines, Metro Ethernet. **Last mile.** **PBX**, **VoIP**, **IP telephony**, unified communications, video conferencing (Zoom, Teams, Meet).
- **Mobile generations:**
  | Gen | Tech | Features |
  |---|---|---|
  | 1G | AMPS | analog voice (1980s) |
  | 2G | **GSM**, CDMA (IS-95) | digital voice, **SMS**, GPRS/EDGE (2.5G) |
  | 3G | UMTS/WCDMA, HSPA | mobile data, video calls |
  | 4G | **LTE**, LTE-A | all-IP, HD streaming, up to ~1 Gbps |
  | 5G | NR | up to ~20 Gbps peak, ~1 ms latency, mmWave/sub-6, **network slicing**, massive IoT (1M devices/km²); NSA vs SA |
  | 6G | research | expected ~2030, terahertz, AI-native, sensing |
  - **SIM** (Subscriber Identity Module), **eSIM**, IMEI (device ID), IMSI. Cell towers/base stations (BTS/eNodeB/gNodeB), handoff/handover, roaming. Spectrum bands (700 MHz–3.5 GHz; mmWave 24–100 GHz).
- **Philippine telecom context:** major carriers **Globe Telecom**, **Smart Communications (PLDT)**, **DITO Telecommunity** (third player, launched 2021); regulators **NTC** and **DICT**; major fixed ISPs PLDT, Globe, Converge ICT, Sky Cable; Free Wi-Fi law (Republic Act 10929, **Free Internet Access in Public Places Act**, 2017); **Konektadong Pinoy** law (2025) opened up data transmission market; submarine cables (Asia Pacific Gateway, SEA-ME-WE) landing in PH (Baler, Ballesteros, Davao…).

## Network tools & commands
| Command | Use |
|---|---|
| `ping` | test reachability (ICMP echo); `ping 127.0.0.1` tests own TCP/IP stack |
| `ipconfig` (`/all`, `/release`, `/renew`, `/flushdns`) / `ifconfig` / `ip addr` | IP configuration |
| `tracert` / `traceroute` | path/hops to destination |
| `nslookup` / `dig` | DNS queries |
| `netstat` / `ss` | connections & listening ports |
| `arp -a` | ARP cache |
| `route print` | routing table |
| `pathping`, `mtr` | ping + trace |
| `nmap` | port scanner (Gordon "Fyodor" Lyon) |
| **Wireshark** / `tcpdump` | packet capture/analyzer |
| `telnet`, `ssh`, `curl`, `wget`, `Test-NetConnection` | connectivity |
- **Troubleshooting order (bottom-up):** physical → link → network → transport → application. Typical checks: cable/link lights → IP/DHCP → gateway ping → DNS → app.
- **Monitoring/management:** SNMP, NetFlow, Nagios, Zabbix, PRTG. **Cloud networking:** VPC, subnets, security groups, CDN, load balancers.

## Internet history & governance · finals
- **ARPANET** 1969 (first message "LO" from UCLA to Stanford); **TCP/IP** switch 1 Jan 1983; **Vint Cerf & Bob Kahn** = "fathers of the Internet"; **DNS** (Paul Mockapetris, 1983); **WWW** (Tim Berners-Lee 1989–91); **Mosaic** 1993; **Netscape**; first Philippine Internet connection **1994 (PHNet)**; **.ph** domain managed by **dotPH**.
- **ICANN** oversees domain names & IP allocation; **IANA** function; **RIRs**: ARIN, RIPE NCC, **APNIC**, LACNIC, AFRINIC.
- Domain levels: root `.` → **TLD** (gTLD .com/.org/.net; ccTLD .ph/.jp/.us) → SLD → subdomain. **URL** parts: scheme://host:port/path?query#fragment. **FQDN**.
- **Net neutrality**, **IXP** (internet exchange point; PH has **PHOPEX**), **CDN**, **Tier 1/2/3 ISPs**.

---

## ✅ Quick self-check
- Number of OSI layers? → **7**; layer that routes packets → **Network (3)**; MAC addresses → **Data Link (2)**; ports/TCP → **Transport (4)**
- PDU at transport (TCP) → **Segment**; network → **Packet**; data link → **Frame**; physical → **Bits**
- Device at layer 2 → **Switch**; layer 3 → **Router**; layer 1 → **Hub/repeater**
- TCP/IP layers count → **4**
- MAC address length → **48 bits**; IPv4 → **32 bits**; IPv6 → **128 bits**
- Private Class C range → **192.168.0.0/16**; loopback → **127.0.0.1**; APIPA → **169.254.x.x**
- Usable hosts in /27 → **30**; /28 → **14**; /30 → **2**; /24 → **254**
- Protocol resolving IP to MAC → **ARP**; assigns IPs automatically → **DHCP** (DORA)
- DNS port → **53**; HTTP → **80**; HTTPS → **443**; SSH → **22**; FTP → **21**; SMTP → **25**; POP3 → **110**; IMAP → **143**; RDP → **3389**; Telnet → **23**
- Protocol for ping → **ICMP**
- Reliable transport protocol → **TCP**; connectionless → **UDP**
- Three-way handshake → **SYN, SYN-ACK, ACK**
- HTTP 404 → **Not Found**; 403 → **Forbidden**; 500 → **Internal Server Error**; 200 → **OK**
- Link-state routing protocol → **OSPF**; RIP max hops → **15**; routing between AS → **BGP**
- Wi-Fi 6 standard → **802.11ax**; Wi-Fi 7 → **802.11be**; Ethernet → **802.3**; Bluetooth → **802.15.1**
- Safest Wi-Fi security → **WPA3**
- Ethernet cable max length → **100 m**; connector → **RJ-45**
- Multiplexing in fiber by wavelength → **WDM**
- Protocol preventing switching loops → **STP**
- Who designed Ethernet? → **Robert Metcalfe**
- Mobile gen with all-IP & LTE → **4G**
- Third PH telco launched 2021 → **DITO Telecommunity**
- Regulator for PH telecom → **NTC**; PH ICT department → **DICT**
- Command to see the route → **tracert/traceroute**
