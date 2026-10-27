# 08 · Computer Architecture & Organization
*How the CPU, memory, buses and I/O are organized. Includes modern chip/GPU facts for trivia.*

---

## 1. Architecture vs Organization
- **Computer architecture** = attributes visible to the programmer (instruction set, data types, addressing modes, I/O mechanisms). **Computer organization** = operational units & interconnections that realize the architecture (control signals, interfaces, memory technology).
- **Von Neumann architecture** (1945): one memory for instructions *and* data, single bus → **von Neumann bottleneck**. Components: CPU (ALU + CU + registers), memory, I/O, buses.
- **Harvard architecture**: separate instruction and data memories/buses (microcontrollers like AVR/Arduino, DSPs; modern CPUs use "modified Harvard" with split L1 I-cache/D-cache).
- **Flynn's taxonomy:** **SISD** (single processor classic) · **SIMD** (vector/GPU) · **MISD** (rare, fault-tolerant) · **MIMD** (multicore, clusters).
- **ISA families:** **CISC** (complex instructions, variable length, e.g., **x86**), **RISC** (simple, fixed-length, load/store, pipelining-friendly: **ARM, RISC-V, MIPS, PowerPC**). **RISC-V** = open-standard ISA (UC Berkeley). **ARM** (Arm Holdings; Acorn → "Advanced RISC Machine"; licensing model) powers phones, Apple Silicon, AWS Graviton. x86-64 / **AMD64** created by AMD. **EPIC/Itanium** (Intel, failed).

## 2. CPU components
- **ALU** (arithmetic & logic ops), **Control Unit (CU)** (decodes, issues control signals), **Registers**, **clock**, internal buses, **cache**.
- **Key registers:** **PC/IP** (Program Counter — address of next instruction) · **IR** (Instruction Register) · **MAR** (Memory Address Register) · **MDR/MBR** (Memory Data/Buffer Register) · **ACC** (Accumulator) · **SP** (Stack Pointer) · **BP** · **Status/Flags (PSW)** — zero, carry, overflow, sign flags · General purpose (AX, BX, CX, DX in x86; RAX… in x86-64; 31 GPRs in ARM64).
- **Instruction cycle (machine cycle):** **Fetch → Decode → Execute → (Memory access) → Write-back/Store**. Fetch: PC → MAR; memory → MDR → IR; PC incremented.
- **Interrupt cycle** adds a check for interrupts after each instruction.
- **Word size**: bits processed at once (32-bit, 64-bit). **Address bus width n → 2ⁿ addressable locations** (16 lines = 64 KB; 20 = 1 MB (8086); 32 = 4 GB; 64-bit theoretical = 16 EB, practical 48-bit = 256 TB). **Data bus** width = bits moved per transfer. **Control bus** = read/write, interrupt, clock signals.
- **Buses:** system bus (address + data + control); **PCIe** (point-to-point lanes x1/x4/x8/x16; Gen 3 ~1 GB/s per lane, Gen 4 ~2, **Gen 5 ~4**, Gen 6 ~8 GB/s per lane); SATA III (6 Gbps ≈ 600 MB/s); **NVMe** over PCIe; USB; Thunderbolt; I²C, SPI, UART (embedded). **Chipset**: northbridge/southbridge (legacy) → now **PCH**; memory controller on CPU.

## 3. Instruction set & programming level
- **Instruction format:** opcode + operand(s) (0-, 1-, 2-, 3-address instructions). **Instruction types:** data transfer (`MOV, LOAD, STORE, PUSH, POP`), arithmetic (`ADD, SUB, MUL, DIV, INC`), logical (`AND, OR, XOR, NOT, SHL`), control flow (`JMP, JE/JNE, CALL, RET, LOOP`), comparison (`CMP`), I/O.
- **Addressing modes:** immediate, direct, indirect, register, register-indirect, indexed, base+offset, relative, stack.
- **Assembly** → assembler → machine code. **Endianness:** big-endian (MSB at lowest address; network byte order) vs **little-endian** (LSB first; x86, ARM default). Name from *Gulliver's Travels*.
- **Data representation:** unsigned, sign-magnitude, 1's complement, **2's complement** (signed integers); **IEEE 754** floating point: single = **32 bits (1 sign + 8 exponent + 23 mantissa)**, double = **64 bits (1 + 11 + 52)**; fixed-point; BCD. Overflow vs underflow. Text encodings (ASCII/Unicode) → file `02`.
- **Stack** in memory (LIFO) for function calls; **heap**; **text/code**, **data**, **BSS** segments.
- **Performance formulas:**
  - **CPU time = Instruction count × CPI × Clock cycle time** (= IC × CPI / clock rate).
  - **MIPS** = instruction count / (execution time × 10⁶) = clock rate / (CPI × 10⁶). **FLOPS** (floating-point ops/s; GigaFLOPS → TeraFLOPS → PetaFLOPS → **ExaFLOPS**).
  - **Amdahl's Law:** Speedup = 1 / ((1 − P) + P/S) where P = parallelizable fraction, S = speedup of that part. (P = 0.8, S = 4 → 1/(0.2+0.2) = **2.5×**.) Max speedup with infinite S = 1/(1−P).
  - **Pipeline ideal speedup** = number of stages (k stages, n instr: time (k + n − 1) cycles).
  - **Average memory access time** AMAT = hit time + miss rate × miss penalty.

## 4. Pipelining & parallelism
- **Pipelining**: overlap instruction stages (classic 5-stage RISC: **IF, ID, EX, MEM, WB**). **Throughput** up; latency per instruction not reduced.
- **Hazards:** **structural** (resource conflict), **data** (RAW read-after-write; WAR; WAW → fixes: forwarding/bypassing, stalls/bubbles), **control** (branches → branch prediction, delay slots). 
- **Superscalar** (multiple instructions per cycle), **out-of-order execution**, **speculative execution** (→ Spectre/Meltdown vulnerabilities, 2018), **register renaming**, **VLIW**.
- **Multicore** (several cores on one die), **SMT/Hyper-Threading** (Intel; 2 threads per core), **multiprocessor** (SMP, NUMA), cluster, grid, cloud, **GPU/SIMT**, **TPU/NPU**, **FPGA** (reprogrammable) vs **ASIC** (custom). Vector instructions: SSE, AVX/AVX-512 (Intel/AMD), NEON/SVE (ARM).
- **Heterogeneous / big.LITTLE** (performance + efficiency cores; Intel P-cores + E-cores; Apple).
- **Interrupts:** hardware (IRQ; maskable/non-maskable), software (trap/syscall), exceptions (page fault, divide by zero). **ISR/interrupt vector table**. **Polling vs interrupt-driven vs DMA** I/O (see `04`).

## 5. Memory system
- **Hierarchy (speed ↑, cost/byte ↑, size ↓):** Registers → L1 → L2 → L3 cache → main memory (DRAM) → SSD → HDD → tape/cloud archive. Access ~ 1 cycle (reg), ~1–4 ns (L1), ~10 ns (L2/L3), ~60–100 ns (DRAM), ~100 µs (SSD), ~5–10 ms (HDD).
- **Principle of locality:** **temporal** (reuse soon) and **spatial** (nearby addresses) → why caches work. **Hit/miss, hit ratio**, miss types: **compulsory, capacity, conflict**.
- **Cache mapping:** **Direct-mapped** (each block → exactly one line; simple, conflict misses) · **Fully associative** (any line; costly) · **n-way set-associative** (compromise). **Write policies:** write-through vs write-back (dirty bit); write-allocate. **Replacement:** LRU, FIFO, random. Typical cache line 64 B. L1 split I/D; L3 shared.
- **RAM types:** **SRAM** (flip-flops; fast; cache; costly) vs **DRAM** (capacitor + transistor; needs **refresh**; main memory). **SDRAM → DDR (1) → DDR2 → DDR3 → DDR4 → DDR5** (2021; ≥ 4800 MT/s; on-die ECC). **LPDDR** (mobile), **GDDR6/GDDR7** (graphics), **HBM/HBM3E/HBM4** (stacked, AI GPUs), **ECC** (server error-correcting). **Dual channel**. **DIMM / SO-DIMM / CAMM2**.
- **ROM family:** ROM (mask), PROM, EPROM (UV erase), **EEPROM**, **Flash** (NOR for firmware, NAND for SSD/USB/SD; cells SLC/MLC/TLC/QLC), 3D XPoint/Optane (discontinued).
- **Virtual memory**, paging, TLB → file `04`.
- **Storage:** HDD (platters, RPM 5400/7200, SATA); SSD (no moving parts; SATA 550 MB/s vs **NVMe Gen4 ~7 GB/s**, Gen5 ~14 GB/s); **RAID** (0/1/5/6/10); SAS; **NAS vs SAN**; optical; cloud.
- **Memory-mapped I/O** vs port-mapped I/O. **DMA** → file `04`.

## 6. Processor families & modern hardware (trivia-ready)
- **Intel** (Robert Noyce & Gordon Moore, 1968; CEO **Lip-Bu Tan** since March 2025): Core i3/i5/i7/i9 → **Core Ultra** (Meteor/Lunar/Arrow Lake; **Panther Lake** on the **18A** process); Xeon (servers); Intel Arc GPUs; Intel Foundry.
- **AMD** (CEO **Lisa Su**): Ryzen (desktop/laptop), **EPYC** (servers), **Radeon** GPUs, Instinct (AI accelerators, MI300/MI350 series). Architecture names **Zen 1 → Zen 5** (Zen 6 next). AMD acquired ATI (2006), Xilinx (2022).
- **Nvidia** (founded 1993; CEO **Jensen Huang**): GeForce RTX (consumer), data-center GPUs: Volta → Ampere (A100) → Hopper (H100) → **Blackwell** (B200/GB200) → **Rubin** (Vera Rubin platform, 2026); CUDA (parallel computing platform), Tensor cores, NVLink, DGX; coined "GPU" with GeForce 256 (1999). Became first company to pass $4 trillion then $5 trillion market cap in 2025 (verify current rankings before answering).
- **Apple Silicon** (ARM-based SoC, unified memory): M1 (2020) → M2 → M3 → M4 → **M5 (2025)**; A-series for iPhone; Apple moved Macs from Intel to Apple Silicon 2020–2023.
- **Qualcomm** Snapdragon (ARM, mobile; X Elite for Windows PCs), **MediaTek** Dimensity, **Samsung** Exynos, Google Tensor, **Huawei** Kirin.
- **TSMC** (Taiwan; world’s largest contract chipmaker; CEO C. C. Wei) fabricates for Apple, Nvidia, AMD; **Samsung Foundry**; **Intel Foundry**; **SMIC** (China); **ASML** (Netherlands) is the only maker of **EUV lithography** machines. Process node names (7 nm, 5 nm, 3 nm, 2 nm, Intel 18A) are marketing; smaller = more transistors/less power. **Chiplets**, 3D stacking, **CoWoS** packaging.
- **Google TPU** (Tensor Processing Unit, AI), AWS **Trainium/Inferentia**, Microsoft **Maia/Cobalt**, Meta **MTIA**, Groq LPU, Cerebras wafer-scale engine, Tesla Dojo.
- **Supercomputers:** TOP500 (LINPACK benchmark). Exascale machines: Frontier (ORNL), Aurora (Argonne), **El Capitan** (LLNL; #1 since Nov 2024), JUPITER (Germany, Europe's first exascale, 2025). Typical OS: Linux (~100 % of TOP500).
- **Quantum:** qubits (superposition, entanglement), gate model; IBM (Condor/Heron/Starling roadmap), **Google Willow** (Dec 2024, 105 qubits, below-threshold error correction), Microsoft Majorana 1, IonQ, Rigetti, D-Wave (annealing). NISQ era. Threat: **Shor's algorithm** breaks RSA/ECC → post-quantum crypto (NIST **FIPS 203/204/205**, Aug 2024: ML-KEM (Kyber), ML-DSA (Dilithium), SLH-DSA (SPHINCS+)).
- **Neuromorphic**, photonic, **in-memory computing** emerging.

## 7. Motherboard, power, cooling, form factors
- **Form factors:** ATX, Micro-ATX, Mini-ITX, E-ATX. **PSU** 80 PLUS (Bronze/Silver/Gold/Platinum/Titanium) efficiency; connectors 24-pin ATX, EPS 8-pin CPU, PCIe 6+2/12VHPWR/12V-2×6. **Sockets:** Intel LGA 1700/1851, AMD AM4/**AM5** (LGA, DDR5-only). **TDP** (thermal design power). Cooling: air, AIO liquid, custom loop, thermal paste. **CMOS battery** (CR2032) keeps BIOS settings/clock. **POST beeps**. **UEFI** replaces BIOS (GUI, Secure Boot, GPT).
- **Display/graphics:** resolution, refresh rate, response time, panel types **IPS, VA, TN, OLED, mini-LED**; HDR; G-Sync/FreeSync; **ray tracing**, DLSS/FSR upscaling; VRAM.
- **Peripherals:** printers (laser, inkjet, thermal), scanners, UPS (uninterruptible power supply), KVM switch.

## 8. Quick computations
- 2¹⁰ = 1,024; 2²⁰ ≈ 1 M; 2³⁰ ≈ 1 G; 2³² = 4,294,967,296.
- Memory with 12 address lines & 8-bit words = 2¹² × 8 bits = 4,096 B = 4 KB.
- Chip count: 64 KB from 16 KB chips = 4 chips.
- Clock 3 GHz → cycle time = 1/3 ns ≈ 0.333 ns. CPI 2 & 1 billion instr @ 2 GHz → 2×10⁹ cycles ÷ 2×10⁹ Hz = 1 s.
- Disk capacity = surfaces × tracks × sectors × bytes/sector (e.g., 512 B sectors; 4Kn advanced format).
- Hit ratio 0.9, cache 2 ns, memory 100 ns → AMAT = 2 + 0.1×100 = 12 ns.
- Pipeline: 5 stages, 100 instructions → (5 + 100 − 1) = 104 cycles vs 500 unpipelined.
- Binary multiplication shift: ×2ⁿ = left shift n.

---

## ✅ Flashcard seeds
- Stored-program architecture → **Von Neumann**; separate instruction/data memory → **Harvard**
- Part of CPU doing math/logic → **ALU**; directs operations → **Control Unit**
- Register holding next instruction address → **Program Counter (PC)**
- Machine cycle order → **Fetch, Decode, Execute, Store**
- RISC example ISAs → **ARM, RISC-V, MIPS**; CISC → **x86**
- Open-source ISA → **RISC-V**
- Flynn's classes → **SISD, SIMD, MISD, MIMD**
- Memory fastest → **Registers**; then **cache (L1)**
- Volatile main memory needing refresh → **DRAM**; cache memory → **SRAM**
- Latest DDR generation widely used → **DDR5**
- Technique overlapping instruction stages → **Pipelining**
- Hyper-Threading is Intel's name for → **SMT**
- Law: speedup limited by serial fraction → **Amdahl's Law**
- Law: transistors double ~2 yrs → **Moore's Law**
- Little-endian CPU family → **x86/ARM**
- Float32 layout → **1-8-23**; double → **1-11-52**
- 32-bit address space → **4 GB**; 20-bit → **1 MB**
- Nvidia GPU architectures → **Hopper (H100), Blackwell (B200), Rubin**
- Apple chips → **M-series (ARM)**; maker of EUV machines → **ASML**; top foundry → **TSMC**
- CEO of Nvidia → **Jensen Huang**; AMD → **Lisa Su**; Intel → **Lip-Bu Tan**
- First microprocessor → **Intel 4004**
- Fastest storage interface for SSD → **NVMe over PCIe**
- Quantum threat algorithm → **Shor's**
