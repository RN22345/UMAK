# 16 · Information Assurance & Security (IAS)
*(Coach's IAS-COMBINED reviewer — 589 slides from Whitman & Mattord, **Principles of Information Security**, 5th/6th ed., Chapters 1–10.)* Lesson-10 "IT Security" (file 12) is the broad survey; **this file is the textbook-slide version** — expect questions that follow these slides' exact lists and definitions.

---

## Ch 1 · Introduction to Information Security
**History**
- Computer security began right after the first **mainframes**; WWII code-breaking groups created the first modern computers. Early security = **physical controls** on access to sensitive military locations.
- **1960s:** **ARPA** studied redundant networked communications; **Larry Roberts** developed **ARPANET**.
- **1970s–80s:** ARPANET misuse grew — no dial-up safety procedures, no user identification/authorization. Information security began with **RAND Report R-609** (Willis H. Ware, 1970 – declassified 1979): the paper that started the study of computer security and identified the role of **management and policy**.
- **Key dates:** 1968 Maurice Wilkes on password security in time-sharing systems · 1973 Schell, Downey & Popek on secure military systems · 1975 **FIPS** examines **DES** · 1978 Bisbey & Hollingsworth "Protection Analysis" (ARPA) · 1979 Morris & Thompson on password security · **1982 Dennis Ritchie** "On the Security of UNIX" · **1984** · **1992** · DoD **TCSEC = "Rainbow Series"** · **Grampp & Morris** (UNIX security: 4 handles — physical control, management commitment, education, administrative procedures) · Reeds & Weinberger (crypt) · IETF researchers at the **Naval Research Laboratory** developed **SIPP** security protocols → **IPSec**.
- **1990s:** networks everywhere; Internet = first global network of networks; security a low priority; **DEFCON** established **1993**.
- **2000–present:** millions of unsecured networks interconnected; security of a computer depends on every computer it connects to; nation-states engage in information warfare.

**What is security?** "A state of being secure and free from danger or harm." Layers protect **operations, physical infrastructure, people, functions, communications, information**.
- **Information security** = protection of information and its critical elements, including the systems and hardware that use, store and transmit it (info security management, data security, network security).
- **C.I.A. triad** = confidentiality, integrity, availability — now viewed as **inadequate**; the expanded model is the list of critical characteristics.

**Key concepts:** access · asset · attack · **control/safeguard/countermeasure** · exploit · exposure · loss · protection profile (security posture) · **risk** · subjects & objects of attack · threat · threat agent · threat event · threat source · **vulnerability**.
- A computer can be the **subject** of an attack (active tool used to attack) and/or the **object** (the entity being attacked).

**7 critical characteristics of information:** **Availability, Accuracy, Authenticity, Confidentiality, Integrity, Utility, Possession.**
- **McCumber Cube** = 3-dimensional security model (information characteristics × information states × safeguards).

**Components of an information system (IS):** **software, hardware, data, people, procedures, networks.** IS = entire set of people, procedures and technology enabling a business to use information.

**Balancing security & access:** perfect security is impossible — security is a **process, not a goal**; it is a balance between protection and availability.

**Implementation approaches**
| Approach | Key facts |
|---|---|
| **Bottom-up** | grassroots effort by system administrators; strength = technical expertise; **seldom works** (lacks participant support & organizational staying power) |
| **Top-down** | initiated by upper management: issues policy, dictates goals, assigns accountability; most successful when combined with a formal strategy like the **SDLC** |

**SDLC phases (waterfall):** **Investigation → Analysis → Logical design → Physical design → Implementation → Maintenance & change.**
- Investigation: what problem is the system solving? objectives, constraints, scope; preliminary cost-benefit analysis; feasibility (**economic, technical, behavioral**).
- Analysis: assess organization, current systems, capability; ends with documentation + updated feasibility.
- Logical design: business need drives it; select applications, data support, technologies. Physical design: select specific technologies; **make-or-buy** decision; management approval.
- Implementation: software created, components ordered/tested, users trained, acceptance test. Maintenance: **longest and most expensive** phase.

**Software assurance (SA):** secure-development planning in the SDLC. **SwA CBK** (Common Body of Knowledge) — DoD & DHS supported — sections: nature of dangers · fundamental concepts · ethics, law & governance · secure software requirements, design, construction, verification/validation/evaluation · tools & methods · processes · project management · acquisition · sustainment.
- **Design principles:** keep design simple & small · access decisions by **permission, not exclusion** · every access checked for authority · design depends on possession of keys/passwords · protection mechanisms need **two keys** · **least privilege** · minimize mechanisms common to multiple users · human interface easy to use.

**NIST SP 800-64 Rev. 2 (securing the SDLC)** — phases: **Initiation → Development/Acquisition → Implementation/Assessment → Operations & Maintenance → Disposal** (disposal = disposal plan, archive info, **sanitization of media**, dispose hardware/software).

**Security professionals:** **CIO** = senior technology officer, advises on strategic planning · **CISO** = primary responsibility for assessment, management and implementation of IS; usually **reports to the CIO**. **Project team:** champion, team leader, security policy developers, risk assessment specialists, security professionals, system administrators, end users.
- **Data responsibilities:** **data owners** (senior management responsible for security & use) · **data custodians** (responsible for info & systems that process, transmit, store it) · **data users**.
- **3 communities of interest:** information security management/professionals · IT management/professionals · organizational (general) management/professionals.
- Security is **art** (no hard rules), **science** (faults result from specific hardware/software interaction), and **social science** (begins and ends with the people who interact with the system).

---

## Ch 2 · The Need for Security
- **4 functions** of information security: protect the organization's **ability to function** · protect **data** collected and used · enable **safe operation of applications** on IT systems · safeguard **technology assets**.
- Implementing information security has **more to do with management than technology**.
- **Threat** = potential risk to an asset's loss of value · **Attack** = intentional/unintentional act that can damage/compromise · **Exploit** = technique used to compromise a system · **Vulnerability** = potential weakness in an asset or its defensive controls.

### The 12 categories of threats (Table 2-5)
| Category | Examples |
|---|---|
| Compromises to **intellectual property** | piracy, copyright infringement |
| **Deviations in quality of service** | ISP, power, WAN service problems |
| **Espionage or trespass** | unauthorized access/data collection |
| **Forces of nature** | fire, floods, earthquakes, lightning |
| **Human error or failure** | accidents, employee mistakes |
| **Information extortion** | blackmail, information disclosure |
| **Sabotage or vandalism** | destruction of systems/information |
| **Software attacks** | viruses, worms, macros, DoS |
| **Technical hardware failures or errors** | equipment failure |
| **Technical software failures or errors** | bugs, code problems, unknown loopholes |
| **Technological obsolescence** | antiquated/outdated technologies |
| **Theft** | illegal confiscation of equipment/information |

**Highlights**
- **IP:** most common breach = **software piracy**. Watchdogs: **SIIA** (Software & Information Industry Association) and **BSA** (Business Software Alliance).
- **Quality of service:** ISP failures hurt availability; power irregularities = **excesses (surge), shortages (sag/brownout), losses (blackout)**.
- **Espionage/trespass:** competitive intelligence (legal) vs **industrial espionage** (illegal); **shoulder surfing**; **expert hackers** (write scripts/exploits) vs **unskilled hackers** (use others' tools); **cracker** removes software protection; **phreaker** hacks the phone system. **Password attacks:** cracking, **brute force, dictionary, rainbow tables, social engineering**.
- **Human error:** inexperience, improper training, incorrect assumptions — employees are among the **greatest threats**. **Social engineering** (Kevin Mitnick: *"People are the weakest link"*): **advance-fee fraud (Nigerian 4-1-9)** and **phishing**.
- **Information extortion** = cyberextortion (e.g., credit-card theft). **Sabotage:** website defacing, **hacktivist/cyberactivist**, **cyberterrorism/cyberwarfare**.

### Software attacks
| Attack | Definition |
|---|---|
| **Virus** | code segment that attaches to an existing program and takes control of access |
| **Worm** | replicates itself until it fills resources (memory, disk) |
| **Trojan horse** | malware disguised as helpful/necessary software |
| **Polymorphic threat** | evolves to elude detection |
| **Virus/worm hoax** | non-existent malware that wastes time |
| **Back door** | access via known/unknown/new mechanism |
| **DoS** | overload with requests so legitimate requests fail |
| **DDoS** | coordinated DoS from many locations (zombies/bots) |
| **Mail bombing** | huge volume of e-mail to overwhelm the receiver (a DoS) |
| **Spam** | unsolicited commercial e-mail (nuisance; possible vector) |
| **Packet sniffer** | monitors data over a network (legit or theft) |
| **Spoofing** | intruder assumes a trusted **IP address** |
| **Pharming** | attacks browser address bar/redirects users to a fake site |
| **Man-in-the-middle** | attacker monitors, modifies, and re-inserts packets |

- **Most dangerous malware table:** MyDoom (worm, 2004), Klez (virus 2001), ILOVEYOU (virus 2000), Sobig F (worm 2003), Code Red (worm 2001), SQL Slammer/Sapphire (worm 2003), Melissa (macro virus 1999), CIH/Chernobyl (memory-resident virus 1998), Storm Worm (2006), Conficker (2009), Nimda (2001), Sasser (2004), Leap-A/Oompa-A (Apple virus, 2006).
- **Replication vectors:** IP scan & attack · web browsing · virus · unprotected shares · mass mail.
- **Password-power table:** longer + case-sensitive + numbers/special characters = exponentially longer to crack (e.g., 8 chars case-sensitive ≈ 2.7 hours vs. 16 chars lowercase ≈ 6,672 years on a 2015 PC).
- **Technical hardware failures:** Intel Pentium CPU failure; **MTBF** = mean time between failures.
- **Technical software failures:** **OWASP** (Open Web Application Security Project) publishes a top-risks list. **"Deadly sins" of software security:** buffer overruns · catching exceptions · command injection · **cross-site scripting (XSS)** · failure to handle errors · failure to protect network traffic · failure to store/protect data securely · failure to use crypto-strong random numbers · format string problems · neglecting change control · improper file access · improper use of **SSL** · information leakage · integer bugs (overflow/underflow) · race conditions · **SQL injection** · trusting network address resolution · unauthenticated key exchange · magic URLs/hidden forms · weak password-based systems · poor usability.
- **Obsolescence:** proper managerial planning should prevent it. **Theft:** physical theft is easier to control; electronic theft is more complex.

---

## Ch 3 · Legal, Ethical & Professional Issues
- **Laws** = rules that mandate/prohibit behavior, enforced by the state. **Ethics** = socially acceptable behavior, based on **cultural mores** (fixed moral attitudes/customs of a group). Laws carry the authority of a governing body; ethics do not.
- **Liability** = legal obligation beyond criminal/contract law, incl. **restitution** (compensating an injured party). **Due care** = prudent organization acts legally/ethically and knows the consequences. **Due diligence** = maintain the standard of due care and ensure actions are effective. **Jurisdiction**; **long-arm jurisdiction** = laws applied to those outside the court's normal reach.
- **Policy vs law:** policies = managerial directives specifying acceptable behavior; **ignorance of a policy IS an acceptable defense** (not for law). **5 criteria for policy enforcement:** **dissemination, review, comprehension, compliance, uniform enforcement.**
- **Types of law:** constitutional · statutory (civil, tort, criminal) · regulatory/administrative · common law/case/precedent · private & public.

### U.S. laws (memorize name → year → what)
| Law | Gist |
|---|---|
| **Computer Fraud and Abuse Act (CFA Act), 1986** | cornerstone of computer-crime law |
| **National Information Infrastructure Protection Act, 1996** | modified CFA; higher penalties based on value & purpose (commercial advantage, private gain, furthering a crime) |
| **USA PATRIOT Act, 2001** | broader latitude for law enforcement vs terrorism; **USA FREEDOM Act (2015)** inherited select functions as PATRIOT expired |
| **Computer Security Act, 1987** | one of the first attempts to protect federal systems; minimum security practices |
| **Privacy:** Federal Privacy Act **1974** · Electronic Communications Privacy Act **1986** · **HIPAA 1996** (Kennedy-Kassebaum) · **Gramm-Leach-Bliley Act 1999** (Financial Services Modernization) |
| **Identity theft:** Title 18 U.S.C. §1028; **FTC** coordinates — steps: initial fraud alert → order credit reports → identity theft report → monitor |
| **Economic Espionage Act, 1996**; **Security and Freedom through Encryption Act, 1999** |
| **Sarbanes-Oxley Act, 2002** | reliable financial reporting for public companies |
| **Freedom of Information Act (FOIA), 1966** | access to federal agency records (not state/local, not private) |
| **PCI DSS** | payment card standard — **6 areas**: secure networks, protect cardholder data, vulnerability management, strong access control, monitor/test networks, maintain security policy |
| **DMCA** | prohibits circumventing copyright protections; response to **EU Directive 95/46/EC** |

- **UK:** **Computer Misuse Act 1990** (3 offenses: unauthorized access; unauthorized access with intent to commit further offenses; unauthorized acts to impair operation) · Privacy & Electronic Communications Regs 2003 · Police and Justice Act 2006.
- **International:** **Council of Europe Convention on Cybercrime** (lacks enforcement provisions) · **WTO TRIPS** agreement (first significant international effort to protect IP).
- **Ten Commandments of Computer Ethics** (Computer Ethics Institute): don't use a computer to **harm** people · **interfere** with others' work · **snoop** in files · **steal** · **bear false witness** · copy unpaid proprietary software · use others' resources without authorization · appropriate others' intellectual output · think about **social consequences** · use computers with **consideration and respect**.
- **Deterrence** works only with: **fear of penalty, probability of being apprehended, probability of penalty being applied.** Causes of unethical acts: **ignorance, accident, intent.**
- **Professional organizations:** **ACM** (est. **1947**, first educational/scientific computing society) · **(ISC)²** (CISSP, SSCP; **4 mandatory canons**) · **SANS** (GIAC certifications) · **ISACA** (audit, control; CISA/CISM) · **ISSA** (nonprofit society of InfoSec professionals).
- **U.S. agencies:** **DHS** (US-CERT for phishing/malware reports) · **U.S. Secret Service** (financial infrastructure/payments) · **FBI** (**InfraGard** program) · **NSA** (signals intelligence & information assurance; Information Assurance Directorate).

---

## Ch 4 · Planning for Security
- **Governance** = responsibilities & practices of the board and executives; **5 outcomes:** **strategic alignment, risk management, resource management, performance measurement, value delivery.**
- **Policy → Standards → Practices/Procedures/Guidelines.** Policies must never contradict law, must stand up in court; they are the **least expensive controls to execute but most difficult to implement properly.**

| Policy type | Key facts |
|---|---|
| **EISP** (Enterprise Information Security Policy) | sets strategic direction, scope, tone; executive-level, drafted by/with the **CIO**. Components: statement of purpose · information security elements (need) · security responsibilities & roles · reference to other standards |
| **ISSP** (Issue-Specific) | specific technology areas; needs frequent updates. 3 approaches: independent documents · single comprehensive · **modular**. Components: statement of policy · authorized access & usage · prohibited use · systems management · violations · review & modification · limitations of liability |
| **SysSP** (Systems-Specific) | standards/procedures for configuring systems; **managerial guidance** + **technical specifications**; uses **ACLs**; **configuration rule policies**; combination SysSPs |

- **Policy management needs:** responsible manager · review schedule · recommendation method · issuance/revision date · automated management.
- **Blueprint** = basis for design/selection/implementation of policies, training and technology controls; **framework** = outline of overall strategy.
- **ISO/IEC 27000 series:** **27000** overview & vocabulary · **27001** ISMS requirements · **27002** code of practice · 27003 implementation guidance · 27004 measurement · **27005 risk management** · 27006 audit/certification bodies · 27007 auditing guidelines · 27008 auditors on controls · 27014 governance · 27017 cloud · 27018 PII in public clouds · 27031 ICT readiness for business continuity · 27032 cybersecurity · 27033 network security · 27034 application security · **27035 incident management** · 27037 digital evidence · 27799 health.
- **NIST models:** SP 800-12, **800-14** (33 principles for securing systems), 800-18, 800-26, **800-30** (risk). **NIST Cybersecurity Framework** components: **framework core, tiers, profile**; **7-step** implementation: prioritize & scope → orient → create current profile → conduct risk assessment → create target profile → determine/analyze/prioritize gaps → implement action plan.
- **Controls levels:** **management** (direction & scope), **operational** (personnel & physical security), **technical** (tactical implementation). **Defense in depth** = layers. **Security perimeter** protects from outside but **not** from internal attacks.
- **SETA** (Security Education, Training, Awareness) reduces accidental breaches.

| | Education | Training | Awareness |
|---|---|---|---|
| Objective | **Why** | **How** | **What** |
| Teaching | theoretical | practical (skills) | media (videos, newsletters, posters) |
| Impact | long-term | intermediate | short-term |

### Contingency planning (CP)
- **IRP** (incident response) = immediate response; **DRP** (disaster recovery) = restore systems after a disaster (reestablish ops at the **primary site**); **BCP** (business continuity) = reestablish/relocate critical operations during a disaster at the primary site. IRP can escalate to DRP and BCP.
- **CP process (7 steps):** develop CP policy statement → conduct **BIA** → identify preventive controls → create contingency strategies → develop plan → ensure testing/training/exercises → ensure plan maintenance.
- **BIA (3 stages):** determine mission/business processes & recovery criticality → identify recovery priorities for system resources → identify resource requirements. Recovery metrics: **RPO, RTO, WRT, MTD.**
- **Incident response phases:** planning · **detection** (often a help-desk complaint) · **reaction** (notify key personnel, document; **containment** is first priority) · **recovery** · damage assessment · automated response (downsides: legal liability of counterattack, ethics).
- **Site strategies:** exclusive = **hot, warm, cold sites**; shared = **time-share, service bureaus, mutual agreements**. **Off-site storage:** **electronic vaulting, remote journaling, database shadowing.**
- **Crisis management**: protects people; verifies headcount, alert roster, emergency cards. **Consolidated contingency plan** = single document set (IR + DR + BC).
- **Law enforcement:** advantages = better evidence handling, warrants/subpoenas, witness statements; disadvantages = organization loses control, may not hear for weeks, equipment may be tagged as evidence; if a criminal act is detected, the organization is **legally obligated** to involve them.

---

## Ch 5 · Risk Management
- **Risk management** = identify risk → assess relative magnitude → reduce to acceptable level. **Know yourself** (assets) and **know the enemy** (threats). **Risk identification** (recognize/enumerate/document) · **risk assessment** (extent assets are exposed) · **risk control** (apply controls to reduce to acceptable level).
- **Risk appetite** = quantity/nature of risk the organization will accept. **Residual risk** = risk remaining after controls. Goal: bring **residual risk in line with risk appetite**. If appetite < residual risk → need more controls.
- **Asset inventory attributes:** name, IP address, **MAC address**, element type, serial number, manufacturer, model/part number, software version, location, controlling entity.
- **Classification schemes:** **confidential, internal, public** (military: unclassified/confidential/secret/top secret). Owners classify; **need-to-know**; **clean desk policy**; **dumpster diving**. Categories must be **comprehensive and mutually exclusive**.
- **Weighted factor analysis** ranks asset importance (criteria weights total 100). **TVA worksheet** = Threats–Vulnerabilities–Assets.
- **Calculating risk:** Risk = **loss frequency × loss magnitude** − % risk mitigated by current controls + element of **uncertainty**. Ranked vulnerability risk worksheet is the initial working document.
- **Open FAIR:** identify scenario components → loss event frequency → probable loss magnitude → derive & articulate risk.

### The 5 risk control strategies
| Strategy | Meaning |
|---|---|
| **Defense** (avoidance) | prevent exploitation — **preferred**: policy, education & training, technology |
| **Transference** | shift risk to other assets/processes/organizations (outsourcing, insurance) |
| **Mitigation** | reduce **impact** — IR plan, **DR plan (most common)**, BC plan |
| **Acceptance** | do nothing; valid only if the asset doesn't justify protection cost |
| **Termination** | avoid the business activity that introduces uncontrollable risk |
- Rule of thumb for choosing: when a vulnerability exists / can be exploited / attacker's cost < gain / potential loss is substantial.
- **Formulas:** **SLE = asset value × exposure factor (EF)** · **ALE = SLE × ARO** (annualized rate of occurrence) · **CBA = ALE(prior) − ALE(post) − ACS** (annualized cost of safeguard).
- **Quantitative** (actual values) vs **qualitative** (scales, non-numerical).
- **Benchmarking** (study other organizations' practices; metrics-based vs process-based) · **standard of due care** · **best business practices** · **baselining** (compare past activity vs future performance). Biggest problem with benchmarking: **organizations don't talk to each other.**
- **Feasibility studies:** organizational · operational · technical · political (+ economic = CBA).
- **NIST Risk Management Framework:** **frame → assess → respond → monitor.** SP 800-39 uses 3 tiers (organization, mission/business process, information system).

---

## Ch 6 · Access Controls, Firewalls & VPNs
- **Access control** = selective method specifying who may use a resource and how. **MAC** (mandatory — structured data classification rating each collection AND user) · **DAC** (discretionary — at the discretion of the data user) · **Nondiscretionary** (central authority; role/task-based).
- **4 functions:** **Identification** (I am a user) → **Authentication** (I can prove it) → **Authorization** (here's what I can do) → **Accountability** (you can track me; a.k.a. auditability; via logs/journals).
- **Authentication factors:** **something you know** (password, passphrase) · **something you have** (dumb card = magnetic stripe, **smart card** = chip, **synchronous** vs **asynchronous tokens**) · **something you are** (biometrics) · (somewhere you are). **Strong authentication** = at least two different factors.
- **Authorization** can be for each user, each group, or across multiple systems (**authorization tickets**).
- **Biometrics:** only fingerprints, retina, iris and DNA are considered truly unique. Evaluated by **false reject rate (Type I)**, **false accept rate (Type II)** and **crossover error rate (CER)**.
- **Architecture models:** **TCB** (trusted computing base; TCSEC Rainbow Series; **covert channels** = storage & timing) · **ITSEC** · **Common Criteria** (successor to TCSEC & ITSEC) · **Bell-LaPadula** (confidentiality: **no read up, no write down**) · **Biba** (integrity: **no write up, no read down**) · **Clark-Wilson** (integrity; no unauthorized changes; internal/external consistency) · **Graham-Denning** (objects, subjects, rights).

### Firewalls
- **Firewall** = hardware/software that filters traffic between the **untrusted (outside)** and **trusted (inside)** network.
- **Processing modes (4):** **packet filtering** · **application-layer proxy** · **MAC-layer** · **hybrid** (incl. **NGFW**, **UTM**).
- **Packet filtering** examines headers (source/destination IP, direction, TCP/UDP port): **static**, **dynamic**, **stateful packet inspection (SPI)** using a **state table**. **MAC-layer firewalls** work at the data-link MAC sublayer (filter by host MAC address + ACL). **Application proxy** sits in the DMZ.
- **Architectures (3):** **single bastion host** (sacrificial host; dual-homed with 2 NICs; may use **NAT**) · **screened host** (packet-filtering router + dedicated firewall; attacker must compromise 2 systems) · **screened subnet with DMZ** (**dominant today**; 2+ firewalls; internal access only from DMZ bastion hosts; creates **extranets**).
- **Reserved non-routable (private) ranges:** **10.0.0.0/8**, **172.16.0.0–172.31.255.255 (/12)**, **192.168.0.0/16**; IPv6 **fc00::/7**.
- **Best practices:** all traffic from the trusted network allowed out · firewall never directly accessed from the public network · SMTP allowed through · **ICMP denied** · **Telnet to internal servers blocked** · block HTTP from reaching internal networks when web services are outside · deny anything not verifiably authentic.
- **Well-known ports:** 7 Echo · 20 FTP data · 21 FTP control · 23 Telnet · 25 SMTP · 53 DNS · 80 HTTP · 110 POP3 · 161 SNMP.
- **Content filter** restricts content in/out of a network (non-business sites, spam).

### Remote access & VPN
- **War dialer** = automatic phone-dialing program that finds modems. **RADIUS** (Remote Authentication Dial-In User Service; central server) · **Diameter** (emerging alternative from RADIUS) · **TACACS** (centralized validation, client/server).
- **Kerberos:** secure third-party authentication; **symmetric** key; 3 services — **Authentication Server (AS)**, **Key Distribution Center (KDC)**, **Ticket Granting Service (TGS)**; AS issues a **ticket-granting ticket (TGT)**.
- **SESAME** (Secure European System for Applications in a Multivendor Environment): like Kerberos but uses **public-key** encryption, **privilege attribute server** and **privilege attribute certificate**.
- **VPN** = private, secure connection over a public network. Types: **trusted, secure, hybrid.** Must provide **encapsulation, encryption, authentication.** **Transport mode** = encrypts only the IP **data**, header not encrypted. **Tunnel mode** = entire packet encrypted and encapsulated between two perimeter tunnel servers (hides true destination).

---

## Ch 7 · IDPS & Other Security Tools
- **Intrusion prevention** (deter) · **intrusion detection** (identify) · **intrusion reaction** · **intrusion correction**. An IDS detects a violation of its configuration and triggers an **alarm**.
- **IDPS terminology:** alarm clustering & compaction · alarm filtering · alert/alarm · confidence value · evasion · false attack stimulus · **false negative / false positive** · noise · site policy (awareness) · true attack stimulus · **tuning**.
- **Types:** **Network-based (NIDPS)** (monitors a segment; passive; can't analyze encrypted packets) incl. **wireless** NIDPS and **network behavior analysis (NBA)**; **Host-based (HIDPS)** (monitors one host; checks key system files/**configuration or change management**; can see decrypted data; heavier management). 
- **Detection methods:** **signature-based** (known patterns; needs constant updates) · **anomaly-based / behavior-based** (baseline & **clipping level**; catches new attacks; more false positives) · **stateful protocol analysis** (**deep packet inspection**) · **log file monitors (LFM)**.
- **Response:** **active** (collect more info, modify environment, act against intrusion) vs **passive** (alarms, SNMP traps).
- **Deployment strategies:** **centralized, fully distributed, partially distributed.** **NIST: 4 NIDPS sensor locations** — (1) behind each external firewall in the DMZ, (2) outside an external firewall, (3) on major backbones, (4) on critical subnets.
- **Honeypot** = decoy system · **honeynet** = several honeypots on a segment · **padded cell** = protected honeypot that attackers are seamlessly transferred to when an IDPS detects them. **Trap-and-trace:** **enticement is legal and ethical, entrapment is not.** **LaBrea** = tar-pit active-prevention tool.
- **Scanning & analysis:** **footprinting** (collect publicly available info) → **fingerprinting** (systematic survey of discovered addresses/services) · **port scanners** · firewall analysis tools · OS detection tools · **vulnerability scanners** (**active** vs **passive**) · **packet sniffers** (legal only on a network the org owns, with authorization and consent) · wireless security tools.

---

## Ch 8 · Cryptography
- **Cryptology** = cryptography (making codes) + **cryptanalysis** (breaking them). Terms: algorithm · bit stream cipher · block cipher · cipher/cryptosystem · ciphertext · code · decipher/decrypt · encipher/encrypt · **key/cryptovariable** · keyspace · link encryption · plaintext · **steganography** · **work factor**.
- **Bit stream** = bit-by-bit; **block cipher** = fixed-size blocks (8/16-bit etc.).
- **Substitution** (monoalphabetic vs polyalphabetic; **Vigenère** = 26 alphabets) · **Transposition** (rearrange within a block; uses block padding) · **XOR** (same bits → 0, different → 1; simple and easy to break) · **Vernam cipher** (Bell Labs; one-time pad; subtract 26 if sum exceeds 26) · **Book ciphers** (book cipher, running key, template).
- **Hash functions:** public algorithms producing a hash value to confirm message identity/integrity; no key required (a **MAC** may be attached); used in password verification.
- **Symmetric** (same secret key; private-key; fast; key distribution problem): **DES** (64-bit block, **56-bit key**, NIST **1976**) · **3DES** · **AES** (replaces DES/3DES).
- **Asymmetric** (two related keys, public + private): **RSA** = first public-key algorithm published for commercial use. Security rests on the **key**, not on keeping the algorithm secret.
- **PKI** provides **authentication, integrity, privacy, authorization, nonrepudiation**; components: **CA (certificate authority), RA (registration authority)**, certificate directories, management protocols, policies. **Digital signature** → **nonrepudiation** (DSS standard). **Digital certificate** = file with key + identity info signed by CA; **distinguished name (DN)**.
- **Hybrid systems:** **Diffie-Hellman** key exchange (most common; foundation of public-key developments).
- **Steganography:** hide info in images (.bmp), .wav, .mp3, etc.
- **Protocols:** **SSL** (public-key encryption of a channel) / **S-HTTP** (encrypts individual messages) · **S/MIME** (MIME + digital signatures) · **PEM** (3DES + RSA) · **PGP** (Phil Zimmermann, **1991**; IDEA cipher; 6 services: authentication by digital signatures, message encryption, compression, e-mail compatibility, segmentation, key management) · **SET** (MasterCard & VISA, **1997**; DES for card info) · **WEP** (early 802.11 security) → **WPA/WPA2**; **RSN / CCMP** (AES-counter mode CBC-MAC) · **Bluetooth** exploitable within ~30 ft · **IPSec** (uses Diffie-Hellman, public-key signatures, bulk encryption, digital certificates).

---

## Ch 9 · Physical Security
- Physical security protects physical items/areas from unauthorized access; most technical controls can be circumvented with physical access.
- **7 sources of physical loss:** extreme temperature · gases · liquids · living organisms · projectiles · movement · energy anomalies.
- **Controls:** walls/fencing/gates · guards · dogs · ID cards & badges (**tailgating**) · locks & keys (mechanical/electromechanical; manual, programmable, electronic, biometric; **fail-safe** vs **fail-secure**) · **mantrap** (small enclosure with different entry/exit) · electronic monitoring (**CCTV**; passive) · alarms (motion, thermal, glass-break, weight, contact sensors) · computer rooms & wiring closets · interior walls/doors (firewall-grade walls; push/crash bars). **Custodial staff** often have the most unsupervised access.
- **Fire:** most serious threat to people; fires cause more damage/injury/death than any other threat. A fire needs **temperature, fuel, oxygen** — deny one. Suppression: water/mist, **CO₂** (removes oxygen), soda acid, gas-based; **Halon** is clean but ozone-depleting (new installations prohibited). **Detection:** thermal, smoke, flame. Extinguisher classes **A, B, C, D, K**.
- **HVAC concerns:** temperature, filtration, humidity, **static electricity**. **Ventilation shafts** can be climbed (use wire-mesh grids). **Grounding & amperage**, **GFCI** (interrupts ground faults). **UPS configurations:** standby · line-interactive · standby online hybrid · standby ferroresonant · double-conversion online · delta-conversion online. **Emergency power shutoff.**
- **Water problems:** lack or surplus. **Structural collapse**: periodic inspections by civil engineers.
- **Data interception (3):** direct observation · interception of transmission · **electromagnetic interception** (**TEMPEST** program). **Mobile security:** CompuTrace; remote/telecommuting security; inventory management; outsourcing physical security.

---

## Ch 10 · Implementing Information Security
- Blueprint → **project plan**. Implementation changes **procedures (policy), people (training), hardware (firewalls), software (encryption), data (classification)**.
- **Project management:** planning → supervising tasks → wrapping up. **Work breakdown structure (WBS)** tasks: work to be done, people/skills, start/end dates, effort (hours), **capital** and **noncapital** expenses, dependencies.
- **8 planning considerations:** financial · priority · time & scheduling · staffing · procurement · organizational feasibility · training & indoctrination · scope.
- **Executing the plan:** a **negative feedback loop** measures progress; the manager can adjust **effort/money, elapsed time/schedule, or quality/quantity of the deliverable.** Wrap-up: collect documentation, final report, resolve pending issues, critique.
- **Certifications:** GIAC Certified Project Manager (SANS) · IT security project management (EC-Council) · Certified Security Project Manager (Security Industry Association).
- **4 conversion strategies:** **direct changeover · phased implementation · pilot implementation · parallel operations.**
- **Bull's-eye model:** prioritize complex change from general to specific — layers: **Policies → Networks → Systems → Applications.**
- **Outsourcing** options; **technology governance & change control** (improves communication, coordination, reduces unintended consequences).
- **Change management:** **Lewin change model: unfreezing → moving → refreezing.** Reduce resistance: **communicate, educate, involve**; **JAD** (joint application development). Build **resilience**.
- **Certification vs Accreditation:** **certification** = evaluation of technical & nontechnical controls (does design/implementation meet requirements?); **accreditation** = formal authorization to process/store/transmit information.
- **NIST SP 800-37 Rev. 1** (RMF) & **CNSS Instruction 1000 (NIACAP)**; federal info grouped as **NSI, Non-NSI, IC**. **NIACAP phases (4):** definition, verification, validation, post-accreditation. **ISO 27001/27002** used outside the U.S. (British roots, ISMS).

---

## Last-minute memory hooks
- **CIA** + 7 characteristics = **A**vailability, **A**ccuracy, **A**uthenticity, **C**onfidentiality, **I**ntegrity, **U**tility, **P**ossession.
- **12 threat categories** → "IP, QoS, Espionage, Nature, Human, Extortion, Sabotage, Software attack, HW fail, SW fail, Obsolescence, Theft."
- **Due care** = do the right thing; **due diligence** = keep doing it and prove it works.
- **5 risk strategies:** Defend, Transfer, Mitigate, Accept, Terminate. **ALE = SLE × ARO.** **SLE = AV × EF.**
- **Bell-LaPadula** = confidentiality (no read up/no write down); **Biba** = integrity (no write up/no read down).
- **Firewall architectures:** bastion → screened host → **screened subnet (DMZ)**.
- **Kerberos = AS + KDC + TGS** (symmetric); **SESAME = public-key.**
- **DES = 64-bit block / 56-bit key; RSA = first commercial public-key.**
- **Enticement = OK; entrapment = not OK.**
- **NIACAP phases:** definition, verification, validation, post-accreditation.
- **Lewin:** unfreeze → move → refreeze.
