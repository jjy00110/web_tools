# Web Tools

A sleek, lightweight, and client-side utility suite tailored for digital forensics, Open Source Intelligence (OSINT), and rapid cryptographic or data conversions. Developed natively with a minimalist, high-contrast user interface, all operations run entirely within the user's browser to preserve absolute privacy and data integrity.

## Key Features

### 1. OSINT Search (Smart Scan)
An automated multi-engine query generator. It dynamically analyzes a single input via RegEx patterns and opens specific investigation tabs based on the identified data type:
* **Domains:** Automatically queries *VirusTotal, urlscan.io, Shodan, Who.is, ViewDNS,* and *SecurityTrails*.
* **IP Addresses (IPv4/IPv6):** Routes queries through *VirusTotal, AbuseIPDB, Shodan, ipinfo.io, iplocation.io,* and *BGP Hurricane Electric*.
* **Emails:** Performs leak and reputation checks on *Have I Been Pwned, Hunter.io,* and *EmailRep.io*.
* **Hashes:** Directly inspects cryptographic signatures using *VirusTotal* and *Hybrid Analysis*.
* **Usernames (`username:name`):** Cross-references aliases across multiple social ecosystems (*Facebook, X, Instagram, TikTok, YouTube, LinkedIn, GitHub, Reddit*) and queries *WhatsMyName App*.
* **Google Dorks (`dork:keyword`):** Automates advanced search operators targeting data leaks, breaches, specific file types (`.pdf`, `.doc`, `.xls`), and exposed environment/configuration files (`.sql`, `.json`, `.log`, `.env`).

### 2. Image Intelligence & Metadata Analysis
* **EXIF Metadata Extractor:** Extracts hidden data fields from `JPEG/JPG` images such as device hardware properties (Make/Model) and creation timestamps.
* **Geolocation Mapping:** Decodes DMS (Degrees, Minutes, Seconds) coordinates into Decimal Degrees (DD), automatically presenting a direct hyperlink to Google Maps when GPS data is embedded.
* **Reverse Image Engines:** Rapidly launches independent reverse image search infrastructure (*TinEye, FaceCheck.id, PimEyes*).

### 3. Live Data Converter
An instant encoder/decoder system that processes string inputs in real-time. It features dynamic direction toggling (Encode / Decode) and one-click clipboard shortcuts (Paste/Copy) for:
* **Base64**
* **Hexadecimal**
* **Binary (8-bit blocks)**
* **ASCII** (Comma-separated decimal values)

### 4. Cryptographic Hashing
Generates and inspects digital fingerprints. Supports either direct text input or file stream reading without server-side uploads.
* **Algorithms:** MD5, SHA-1, and SHA-256 signatures via *CryptoJS*.
* **Hash Analysis Integration:** Instantly sends the generated hash output directly into malicious file assessment engines (*VirusTotal* and *Hybrid Analysis*) for verification.

---

## Local Installation & Deployment

Since this project has zero backend requirements or server-side dependencies, it can be cloned and run instantly.

### 1. Run Locally
Clone the repository to your workstation and open the main URL:
```bash
https://jjy00110.github.io/web_tools/
