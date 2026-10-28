# 12 · IT Security (Cybersecurity)
*(Lesson 10.)* Heavy on terms, attack names, crypto, laws and tools — high-yield for identification.

> **How to use this page.** Start with **Basics**: that is what the elimination round tests. The sections after it
> are the deeper detail for the finals (identification, average/difficult). Tip: match each attack or malware name to its one-line definition.

---

## Basics

### Core concepts
- **CIA triad:** **Confidentiality** (only authorized access; protected by **encryption**) · **Integrity** (data not altered; protected by **hashing and digital signatures**) · **Availability** (accessible when needed; **redundancy, backups, DDoS protection**).
- **AAA:** **Authentication** ("Who are you?") · **Authorization** ("What are you allowed to do?") · **Accounting** (what did you do).
- **Vulnerability** = a weakness that can be exploited. **Zero-day** = a vulnerability unknown to the vendor and unpatched.
- **Least privilege** = give users only the access they need for their job. **Defense in depth** = multiple layers of controls. **Zero trust** = "never trust, always verify".

### Malware
- **Virus:** attaches to a host file and **needs user action** to spread.
- **Worm:** spreads **by itself** across networks without user action.
- **Trojan horse:** **disguised as legitimate software**.
- **Ransomware:** **encrypts files** and demands payment.
- **Keylogger** (spyware): records keystrokes.
- **Rootkit:** hides deep in the OS to keep privileged access.
- **Botnet:** a network of infected computers controlled remotely.

### Social engineering
- **Phishing** (fake emails/sites): **Smishing** = via SMS · **Vishing** = via voice calls · **Spear phishing** = targets a specific person/organization · **Whaling** = aimed at senior executives.
- **Pharming:** redirects users to a fake website by tampering with DNS.
- **Shoulder surfing:** watching someone type a password. **Dumpster diving:** searching trash for sensitive information.
- **Tailgating:** following an authorized person into a restricted area. **Baiting:** leaving infected USB drives for victims to find.

### Attacks
- **DDoS:** many sources flood a target to **make a service unavailable**.
- **Man-in-the-middle (MITM):** intercepts (and may alter) communication between two parties.
- **Password attacks:** **brute force** = try every combination · **dictionary** = try common words · **credential stuffing** = reuse leaked username-password pairs on other sites. **Salting** (random value added before hashing) defends against rainbow tables.
- **SQL injection:** malicious SQL inserted through user input; best defense = **parameterized queries**.
- **XSS (cross-site scripting):** malicious scripts injected into pages viewed by other users.
- **CSRF:** tricks an authenticated user's browser into sending unwanted requests.

### Cryptography
- **Symmetric:** the **same key** encrypts and decrypts (**AES**). **Asymmetric:** public/private key pair (**RSA**).
- **Hashing:** one-way fixed-length digest (**SHA-256**); protects integrity.
- **Digital signature:** created with the sender's **private key**.
- **Digital certificate:** issued by a **Certificate Authority (CA)**.
- **Steganography:** hiding data inside images or other files.
- **TLS** is the successor of **SSL** (HTTPS uses TLS).

### Authentication and access control
- **Factors:** something you **know** (password) · **have** (smart card, token) · **are** (fingerprint, biometrics). **MFA** combines at least two factor types.
- **RBAC:** permissions based on **job roles**. **DAC:** the **owner** decides who has access.

### Defensive technology
- **Firewall:** filters network traffic based on rules. **WAF:** protects web apps from SQLi and XSS at **Layer 7**.
- **IDS:** **detects and alerts**, does not block. **IPS:** detects and **actively blocks**.
- **DMZ:** network segment between the internet and the internal network hosting public servers.
- **Honeypot:** a decoy system that lures attackers.
- **VPN** = **Virtual Private Network**. **SIEM** = **Security Information and Event Management**.
- **CVE** = **Common Vulnerabilities and Exposures**. **NIST CSF** core functions: **Identify, Protect, Detect, Respond, Recover**.
- **Tools:** **Wireshark** = packet analyzer · **Nmap** = network scanner · **Kali Linux** = penetration-testing distro.

### Philippines
- The **Data Privacy Act** (RA 10173) is enforced by the **National Privacy Commission (NPC)**.

---

## Core concepts
- **CIA triad:** **Confidentiality** (only authorized access; encryption, access control) · **Integrity** (data not altered; hashing, checksums, digital signatures) · **Availability** (accessible when needed; redundancy, backups, DDoS protection). Extended: **Authenticity, Non-repudiation, Accountability, Privacy**; **Parkerian hexad** adds possession/control, authenticity, utility.
- **AAA:** **Authentication** (who are you?) → **Authorization** (what can you do?) → **Accounting/Auditing** (what did you do?). **Identification** precedes authentication.
- **Threat** (potential danger) · **Vulnerability** (weakness) · **Exploit** (code/technique using a vulnerability) · **Risk** = likelihood × impact (threat × vulnerability × asset value) · **Attack vector / surface** · **Payload**. **Zero-day** = unpatched, unknown-to-vendor vulnerability. **Insider threat**.
- **Principles:** **least privilege**, **defense in depth** (layered security), **separation of duties**, **need-to-know**, **fail-safe defaults**, **complete mediation**, **economy of mechanism**, **security by design**, **Kerckhoffs's principle** (system secure even if everything but the key is public), **zero trust** ("never trust, always verify"; term popularized by John Kindervag), **least common mechanism**, **keep it simple**.
- **Risk management:** identify assets → threats/vulnerabilities → assess (qualitative/quantitative) → treat (**mitigate, transfer/insure, avoid, accept**) → monitor. **SLE × ARO = ALE**. Controls: **preventive, detective, corrective, deterrent, compensating**; types **administrative (policy), technical (logical), physical**.
- **Threat actors:** script kiddies; **hacktivists** (Anonymous); cybercriminals/organized crime; **insiders**; **nation-state / APT** (advanced persistent threat); competitors; terrorists. **Hat colors:** **white** (ethical), **black** (malicious), **gray** (in between), blue/red/green. **Famous hackers:** Kevin Mitnick, Kevin Poulsen, Adrian Lamo, Gary McKinnon, Albert Gonzalez, Robert Tappan Morris, **Onel de Guzman** (Filipino; ILOVEYOU worm 2000).

## Malware
| Type | Key idea |
|---|---|
| **Virus** | attaches to host file/program; needs user action to spread |
| **Worm** | self-replicates across networks without host/user action (Morris 1988, Conficker, **WannaCry**) |
| **Trojan horse** | disguised as legitimate software; opens backdoor; doesn't self-replicate |
| **Ransomware** | encrypts data and demands payment (WannaCry 2017, NotPetya, **LockBit, Conti, REvil, BlackCat**) |
| **Spyware / keylogger** | secretly monitors / records keystrokes |
| **Adware** | unwanted ads |
| **Rootkit** | hides deep (kernel/boot) to keep privileged access |
| **Backdoor / RAT** | remote access |
| **Botnet / zombie** | network of infected machines controlled by **C2** server (Mirai IoT botnet) |
| **Logic bomb / time bomb** | triggers on condition/date |
| **Fileless**, **cryptojacker**, **scareware**, **wiper**, **infostealer**, **malvertising**, **PUP** | |
- **Macro virus**, **boot sector virus**, polymorphic/metamorphic (change signature), **stealth**. **Dropper/loader**.
- **Sandbox**, heuristic and behavior-based detection vs **signature-based**. **Antivirus**: Windows Defender, Kaspersky, Norton, McAfee, Bitdefender, ESET. **EDR/XDR** (CrowdStrike Falcon, SentinelOne).

## Social engineering & fraud
- **Phishing** (fake emails/sites to steal credentials) · **Spear phishing** (targeted) · **Whaling** (executives) · **Vishing** (voice calls) · **Smishing** (SMS) · **Quishing** (QR codes) · **Pharming** (redirect via DNS to fake site) · **Clone phishing** · **BEC** (business email compromise) · **Pretexting** · **Baiting** (infected USB) · **Tailgating/piggybacking** · **Quid pro quo** · **Shoulder surfing** · **Dumpster diving** · **Impersonation / vishing with AI voice cloning / deepfakes** · **Typosquatting** · **Watering-hole** · **Hoax** · **Scam types**: romance scam, investment/crypto pig-butchering, fake job, loan apps, GCash/OTP scams.
- **Red flags:** urgency, mismatched URLs, generic greeting, attachments, requests for OTP/password. **Never share OTP.**
- **Philippine context:** high volume of smishing (fake bank/GCash/e-wallet links) → **SIM Registration Act (RA 11934)**, **AFASA (RA 12010)** penalizes money mules & account-scam enablers.

## Network & system attacks
- **DoS** (one source) vs **DDoS** (many sources/botnet) → exhaust bandwidth/resources: **SYN flood**, **UDP flood**, **ICMP/Ping flood**, **Smurf** (ICMP broadcast), **Ping of Death**, HTTP flood, amplification (DNS/NTP/memcached), **Slowloris**. Mitigation: rate limiting, scrubbing, CDN (Cloudflare), anycast, WAF.
- **Man-in-the-Middle (MITM)** / on-path: ARP spoofing, evil twin, SSL stripping. **Sniffing** (Wireshark), **spoofing** (IP, MAC, ARP, DNS, email/caller ID), **session hijacking** (steal session ID/cookie), **replay attack**, **DNS cache poisoning**, **BGP hijacking**, **VLAN hopping**, **port scanning** (nmap), **rogue AP**, **KRACK**, **Bluejacking/Bluesnarfing**, **jamming**.
- **Password attacks:** **brute force** (try all), **dictionary**, **hybrid**, **rainbow tables** (precomputed hashes; defeated by **salting**), **credential stuffing** (reused leaked creds), **password spraying** (one password across many accounts), **keylogging**, **pass-the-hash**.
- **Privilege escalation**, **lateral movement**, **persistence**, **exfiltration**, **buffer overflow**, **race condition (TOCTOU)**, **side-channel** (Spectre/Meltdown), **supply-chain attack** (SolarWinds), **Living off the land**.
- **Physical:** USB drop, skimming (card skimmers), RFID cloning, lock picking, evil maid.

## Web & application security (OWASP)
- **OWASP** = Open Worldwide Application Security Project. **OWASP Top 10 (2021 edition):** A01 **Broken Access Control** · A02 **Cryptographic Failures** · A03 **Injection** (SQLi, XSS merged) · A04 **Insecure Design** · A05 **Security Misconfiguration** · A06 **Vulnerable and Outdated Components** · A07 **Identification & Authentication Failures** · A08 **Software and Data Integrity Failures** · A09 **Security Logging & Monitoring Failures** · A10 **Server-Side Request Forgery (SSRF)**. (A 2025 update exists — verify if needed.) There is also an **OWASP Top 10 for LLM Applications** (prompt injection #1).
- **SQL injection (SQLi):** attacker inserts SQL via input, e.g., `' OR '1'='1' --`. **Defense:** **parameterized queries / prepared statements**, ORM, input validation, least-privilege DB accounts, WAF. Tool: sqlmap.
- **XSS (Cross-Site Scripting):** inject malicious JS into pages viewed by others — **Stored (persistent)**, **Reflected**, **DOM-based**. Defense: output encoding/escaping, **Content Security Policy (CSP)**, `HttpOnly` cookies, sanitize input.
- **CSRF (Cross-Site Request Forgery):** tricks authenticated user's browser into sending unwanted requests. Defense: anti-CSRF tokens, `SameSite` cookies.
- **Others:** command injection, path/directory traversal (`../`), file inclusion (LFI/RFI), file-upload flaws, XXE, insecure deserialization, **clickjacking** (`X-Frame-Options`), open redirect, IDOR (insecure direct object reference), session fixation, HTTP header injection, **CORS** misconfig, API security (BOLA), **bot attacks**, web shells, **defacement**, **Magecart** (card-skimming JS).
- **Secure coding:** validate/sanitize all input (server-side), principle of least privilege, secrets management (never hard-code keys), dependency scanning (SCA), **SAST / DAST / IAST**, code review, **DevSecOps**, threat modeling (**STRIDE**: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege; **DREAD**), security headers (HSTS, CSP, X-Content-Type-Options).

## Cryptography
- **Plaintext** → (encryption + key) → **ciphertext** → (decryption) → plaintext. **Cryptanalysis** = breaking ciphers. **Steganography** = hiding data in other media (images). **Encoding ≠ encryption** (Base64 is reversible without a key). **Obfuscation** ≠ security.
- **Symmetric** (same key to encrypt/decrypt; fast; key distribution problem): **AES** (Rijndael; 128-bit block; keys 128/192/256; US standard, replaced DES in 2001), **DES** (56-bit key; broken), **3DES**, Blowfish/Twofish, **ChaCha20**, RC4 (deprecated). Modes: ECB (insecure), CBC, CTR, **GCM** (authenticated). Types: block vs stream ciphers.
- **Asymmetric / public-key** (public key encrypts, private key decrypts; digital signature reversed; slower; solves key distribution): **RSA** (Rivest–Shamir–Adleman, 1977; based on factoring large primes), **ECC** (elliptic curve; smaller keys), **Diffie–Hellman** (key exchange; Whitfield Diffie & Martin Hellman 1976), ElGamal, DSA/ECDSA. Public/private pair; **PKI**, **X.509 certificates**, **Certificate Authority (CA)**, CRL/OCSP, certificate chain/root of trust.
- **Hybrid:** TLS uses asymmetric to exchange a session key, then symmetric for data.
- **Hashing:** one-way, fixed-length digest, deterministic, avalanche effect, collision-resistant; for integrity & password storage: **MD5** (128-bit; broken), **SHA-1** (160-bit; deprecated), **SHA-2** (SHA-256/512), **SHA-3** (Keccak), **bcrypt, scrypt, Argon2, PBKDF2** (slow password hashes); **salt** (random per-user value), **pepper**; **HMAC** (keyed hash); **checksum**/CRC isn't cryptographic. **Digital signature** = hash of message encrypted with sender's **private** key (provides integrity, authenticity, non-repudiation).
- **Classical ciphers:** **Caesar** (shift; ROT13), **Vigenère** (polyalphabetic), monoalphabetic substitution, **Playfair**, **Rail fence** (transposition), **Atbash**, **One-time pad** (unbreakable if random, same length as message, used once), **Enigma** (WWII Germany; broken by Alan Turing/Bletchley Park). Example: Caesar shift 3 → "HELLO" → "KHOOR".
- **Protocols:** **TLS 1.3** (successor to SSL; HTTPS), **IPsec** (AH, ESP; VPN), **SSH**, **PGP/GPG**, **S/MIME**, **WPA3**, **Kerberos**, **Signal protocol** (E2EE: WhatsApp, Signal), **WireGuard / OpenVPN** VPNs. **Perfect forward secrecy**. **Full-disk encryption:** **BitLocker** (Windows), **FileVault** (macOS), **LUKS** (Linux). **Blockchain:** hashes + digital signatures.
- **Post-quantum cryptography:** **Shor's algorithm** (quantum) could break RSA/ECC; NIST standardized (Aug 2024) **FIPS 203 (ML-KEM / Kyber), FIPS 204 (ML-DSA / Dilithium), FIPS 205 (SLH-DSA / SPHINCS+)**; "harvest now, decrypt later". AES-256 and SHA-3 considered quantum-resistant-ish (Grover halves effective key length).

## Authentication & access control
- **Factors:** **something you know** (password/PIN) · **something you have** (token, phone, smart card) · **something you are** (biometrics) · somewhere you are · something you do. **MFA / 2FA** = two or more different factors. **OTP**, **TOTP** (time-based; Google Authenticator, Authy), HOTP, push approvals, hardware keys (**YubiKey**, FIDO2). **SMS OTP** is weaker (SIM swap, SS7). **Passkeys / WebAuthn / FIDO2** = phishing-resistant passwordless using public-key crypto.
- **Biometrics:** fingerprint, face, iris, retina, voice, palm vein, gait. Metrics: **FAR** (false acceptance), **FRR** (false rejection), **EER/CER** (crossover). 
- **Passwords:** length beats complexity; use **password manager** (Bitwarden, 1Password, KeePass); unique per site; NIST SP 800-63B: no forced periodic rotation, check against breached lists; avoid common passwords (123456, password). Passphrase.
- **SSO** (single sign-on), **federation**, **SAML**, **OAuth 2.0** (authorization delegation – "Sign in with Google" uses **OpenID Connect** for authN), **LDAP/Active Directory** (Microsoft), **Kerberos** (tickets; MIT), **RADIUS / TACACS+** (network AAA), **JWT**, API keys.
- **Access control models:** **DAC** (owner decides), **MAC** (system-enforced labels; military), **RBAC** (role-based; most common in orgs), **ABAC** (attributes), rule-based. **ACL**, capabilities. **Least privilege**, **PAM** (privileged access mgmt).
- **Physical access:** badges, biometrics, **mantrap/airlock**, guards, CCTV, fences/bollards, locks, **cable locks**, **UPS**, environmental controls (HVAC, fire suppression: FM-200, CO₂, never water in server room), **Faraday cage**, **secure disposal** (shredding, degaussing, NIST 800-88 wipe).

## Defensive technology & tools
- **Firewall:** packet-filtering (L3/4), **stateful inspection**, application-layer/proxy, **NGFW** (next-gen: DPI, app-awareness), **WAF** (web app firewall; Layer 7; protects against SQLi/XSS), host-based vs network-based. Rules: default deny. **ACL**. **DMZ** (screened subnet: public servers isolated between two firewalls). **NAT**, **proxy / reverse proxy**, **VPN** (site-to-site, remote access; IPsec/SSL).
- **IDS** (detect & alert; passive) vs **IPS** (detect & block; inline). **NIDS/HIDS**. Detection: **signature-based**, **anomaly-based**, heuristic. Tools: **Snort, Suricata, Zeek**, OSSEC/Wazuh. **False positive / false negative.**
- **SIEM** (Security Information & Event Management: Splunk, QRadar, Microsoft Sentinel, Elastic) · **SOC** (Security Operations Center) · **SOAR** · **EDR/XDR/MDR** · **DLP** (data loss prevention) · **NAC** · **CASB** · **honeypot / honeynet** (decoy) · **UTM** · **sandbox** · **MDM** (mobile device mgmt) · **patch management** · **vulnerability scanning** (**Nessus, OpenVAS, Qualys**) · **hardening/baselines (CIS Benchmarks)** · **backup (3-2-1)** · **immutable backups** · **network segmentation / microsegmentation**.
- **Penetration testing** (authorized simulated attack): **black-box** (no knowledge) / **white-box** (full) / **grey-box**. **Phases:** Reconnaissance (passive/active/OSINT) → Scanning/enumeration → Gaining access (exploitation) → Maintaining access → Covering tracks → Reporting. **Red team** (attack) / **blue team** (defend) / **purple team**. **Bug bounty** (HackerOne, Bugcrowd).
- **Tools:** **Kali Linux** (distro; Offensive Security), **Metasploit** (exploit framework), **Nmap** (scanner), **Wireshark** (packet analyzer), **Burp Suite / OWASP ZAP** (web proxy), **Nikto**, **sqlmap**, **John the Ripper / Hashcat** (password cracking), **Aircrack-ng** (Wi-Fi), **Hydra**, **Maltego / Shodan** (OSINT), **Mimikatz**, **Cobalt Strike**, **Ghidra** (reverse engineering; NSA), IDA Pro, **Autopsy / FTK / EnCase** (forensics), Volatility (memory forensics), **Have I Been Pwned** (Troy Hunt), VirusTotal.

## Frameworks, incident response & standards · finals
- **Cyber Kill Chain (Lockheed Martin, 7 steps):** Reconnaissance → Weaponization → Delivery → Exploitation → Installation → Command & Control → Actions on Objectives. **MITRE ATT&CK** (tactics/techniques matrix). **Diamond Model.** **CVE** (Common Vulnerabilities and Exposures; ID like CVE-2021-44228 = **Log4Shell**), **CVSS** (0.0–10.0; Critical ≥ 9.0), **CWE**, **NVD**.
- **NIST Cybersecurity Framework:** Identify · Protect · Detect · Respond · Recover (CSF 2.0 adds **Govern**). **NIST SP 800-61** incident response lifecycle: **Preparation → Detection & Analysis → Containment, Eradication & Recovery → Post-Incident Activity**. (SANS: Preparation, Identification, Containment, Eradication, Recovery, Lessons learned.) **CSIRT/CERT**. **Forensics:** preserve evidence, **chain of custody**, order of volatility (RAM → disk), write blockers, hash images.
- **BCP** (business continuity plan) · **DRP** (disaster recovery plan) · **BIA** (business impact analysis) · **RTO** (recovery time objective) · **RPO** (recovery point objective) · **MTD** · hot/warm/cold sites · backups: full/incremental/differential.
- **Standards:** **ISO/IEC 27001** (ISMS), 27002, 27005; **ISO 22301** (BCM); **NIST SP 800-53**; **CIS Controls**; **COBIT**; **PCI DSS**; **HIPAA** (US health); **SOX**; **GDPR** (EU; fines up to €20 M or 4 % of global turnover; 72-hour breach notification); **SOC 2**; **FIPS 140**; **Common Criteria**.
- **Audit & governance:** policies (AUP), standards, procedures, guidelines; security awareness training; vendor risk; compliance.

## Philippine cyber laws & agencies · finals
| Law | RA no. | Key points |
|---|---|---|
| **Data Privacy Act of 2012** | **RA 10173** | protects personal info; creates **National Privacy Commission (NPC)**; data subject rights (informed, access, object, erasure/blocking, rectify, damages, data portability); **Data Protection Officer (DPO)**; breach notification within **72 hours**; "personal information controller/processor"; sensitive personal information |
| **Cybercrime Prevention Act of 2012** | **RA 10175** | offenses vs CIA of data (illegal access, illegal interception, data interference, system interference, misuse of devices, cyber-squatting), computer-related (forgery, fraud, identity theft), content-related (cybersex, child pornography, libel); penalties one degree higher than traditional; **CICC** (Cybercrime Investigation and Coordinating Center); NBI Cybercrime Division, PNP Anti-Cybercrime Group |
| **E-Commerce Act of 2000** | RA 8792 | e-signatures, e-documents; penalizes hacking |
| **Anti-Photo and Video Voyeurism Act** | RA 9995 | |
| **Anti-Child Pornography Act** | RA 9775 | |
| **Access Devices Regulation Act** | RA 8484 | credit card fraud |
| **SIM Registration Act** | RA 11934 (2022) | SIM registration to curb scams |
| **Anti-Financial Account Scamming Act (AFASA)** | RA 12010 (2024) | money mules, social engineering schemes |
| **Internet Transactions Act** | RA 11967 (2023) | |
| **DICT Act** | RA 10844 (2016) | creates **Department of Information and Communications Technology** (Secretary **Henry Aguda** since 2025) |
| **Free Internet Access in Public Places** | RA 10929 | |
| **PhilSys Act** | RA 11055 | national ID |
| **Konektadong Pinoy Act** | RA 12234 (2025) | |
| **Anti-Wiretapping Act** | RA 4200 | |
- **Agencies:** DICT, **NPC**, **CICC**, **CERT-PH / National Computer Emergency Response Team**, NBI-CCD, PNP-ACG, BSP, NTC, **National Cybersecurity Plan 2023–2028**.
- Notable PH cyber events: ILOVEYOU worm (2000, Onel de Guzman; led to RA 8792), PhilHealth ransomware (Medusa, Sept 2023), PSA & other agency breaches (2023), DICT/other agency website defacements.

## Ethics & digital citizenship
- **Ten Commandments of Computer Ethics** (Computer Ethics Institute; e.g., thou shalt not use a computer to harm other people / steal / snoop). **ACM Code of Ethics**, IEEE. **Netiquette.** Plagiarism, **copyright** (©; automatic upon creation; fair use), **patent**, **trademark**, **trade secret**, **piracy**, licensing (EULA, open-source, Creative Commons CC BY…). **Digital footprint**, **cyberbullying**, **doxxing**, **catfishing**, **sextortion**, **online grooming**, **fake news/disinformation**, **deepfakes**, **digital divide**, **right to be forgotten**.
- **Safe online behavior:** think before you click, check URL/HTTPS, update software, use MFA, public Wi-Fi caution (use VPN), back up, least privilege, social media privacy settings, don't overshare.

## Mobile, cloud, IoT & AI security · finals
- **Mobile:** jailbreak (iOS) / rooting (Android) removes protections; sideloading; app permissions; SIM swap; Pegasus spyware (NSO); MDM/BYOD; app stores vetting; biometrics + secure enclave.
- **Cloud:** **shared responsibility model** (provider secures the cloud; customer secures *in* the cloud), IAM, misconfigured storage buckets, encryption, CSPM, key management (KMS/HSM), zero trust, CASB.
- **IoT:** default credentials, unpatched firmware, Mirai; network segmentation.
- **AI security & safety:** **prompt injection** (direct/indirect), **jailbreaking**, **data poisoning**, **model inversion/extraction**, **adversarial examples**, **hallucination**, **deepfakes & voice cloning**, AI-generated phishing, **shadow AI**, agent over-permissioning (tool/MCP risks), AI-found vulnerabilities (frontier models now find zero-days — e.g., "critical cybersecurity capability" tiers). Defenses: guardrails, red-teaming, least-privilege tools, human-in-the-loop, output filtering. **NIST AI RMF**, **EU AI Act**, ISO/IEC 42001.

## Famous incidents · finals
| Year | Incident | Note |
|---|---|---|
| 1988 | **Morris worm** | Robert Tappan Morris; first major Internet worm; led to CERT/CC |
| 1999 | Melissa virus | macro virus via email |
| 2000 | **ILOVEYOU** | Filipino student Onel de Guzman; email worm "LOVE-LETTER-FOR-YOU.TXT.vbs" |
| 2003 | SQL Slammer | worm on UDP 1434 |
| 2010 | **Stuxnet** | attacked Iranian centrifuges (Siemens PLCs); widely attributed to US/Israel |
| 2013 | Target breach, Snowden leaks | |
| 2014 | **Heartbleed** (OpenSSL bug), Sony Pictures hack | |
| 2016 | **Mirai botnet** DDoS (Dyn) | IoT |
| 2017 | **WannaCry** (EternalBlue), **NotPetya**, **Equifax** breach | |
| 2020 | **SolarWinds** supply-chain attack | |
| 2021 | **Log4Shell** (Log4j), Colonial Pipeline ransomware, Kaseya | |
| 2023 | MOVEit; PhilHealth ransomware (PH) | |
| 2024 | **CrowdStrike** faulty update outage (19 July) — not an attack; Change Healthcare ransomware; XZ Utils backdoor discovered | |
| 2025–26 | AI-assisted intrusions, agentic AI misuse, large-scale infostealer leaks | |

---

## ✅ Quick self-check
- CIA triad → **Confidentiality, Integrity, Availability**
- AAA → **Authentication, Authorization, Accounting**
- Self-replicating over networks → **Worm**; disguised malicious program → **Trojan**; encrypts files for payment → **Ransomware**; hides at kernel level → **Rootkit**; network of infected machines → **Botnet**
- Phishing via SMS → **Smishing**; voice → **Vishing**; targeting executives → **Whaling**; redirect via DNS → **Pharming**
- Many sources flooding a target → **DDoS**
- Intercepting communication between two parties → **MITM**
- Fixing SQLi → **parameterized queries**; XSS defense → **output encoding/CSP**; CSRF defense → **tokens/SameSite**
- Symmetric example → **AES**; asymmetric example → **RSA**; key exchange → **Diffie–Hellman**; hash example → **SHA-256**
- Digital signature uses → **sender's private key**
- Salting protects against → **rainbow table attacks**
- TLS successor of → **SSL**; HTTPS port → **443**
- MFA factors → **know / have / are**
- Passwordless phishing-resistant standard → **FIDO2/WebAuthn (passkeys)**
- Access control by job role → **RBAC**
- Detects and alerts → **IDS**; detects and blocks → **IPS**
- Screened subnet for public servers → **DMZ**
- Pen test first phase → **Reconnaissance**
- Tool: packet analyzer → **Wireshark**; port scanner → **Nmap**; exploit framework → **Metasploit**; pentest OS → **Kali Linux**
- Vulnerability ID system → **CVE**; severity score → **CVSS**
- NIST CSF functions → **Identify, Protect, Detect, Respond, Recover (+ Govern)**
- Max downtime target → **RTO**; max data loss → **RPO**
- PH Data Privacy Act → **RA 10173** (NPC); Cybercrime Act → **RA 10175**; SIM Registration → **RA 11934**; AFASA → **RA 12010**
- ILOVEYOU worm author → **Onel de Guzman (Philippines)**
- Post-quantum NIST standards → **ML-KEM, ML-DSA, SLH-DSA**
- #1 OWASP 2021 → **Broken Access Control**
- Shared responsibility model → **cloud**
