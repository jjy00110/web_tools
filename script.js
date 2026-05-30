function openTabs(urls) {

  const resultsContainer = document.getElementById("resultsContainer");
  const linksList = document.getElementById("linksList");

  if (resultsContainer && linksList) {

    linksList.innerHTML = "";
    resultsContainer.style.display = "block";

    urls.forEach(url => {

      const li = document.createElement("li");

      li.innerHTML = `
        <a href="${url}" target="_blank">
          ${url}
        </a>
      `;

      linksList.appendChild(li);
    });
  }

  // OPEN ALL TABS
  urls.forEach(url => {
    window.open(url, "_blank");
  });
}

// ==========================================
// SMART SEARCH
// ==========================================

function processSmartSearch() {

  const input = document.getElementById("smartInput").value.trim();

  if (!input) {
    alert("No input detected");
    return;
  }

  // REGEX
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
  const ipv4Regex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
  const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::1|::|([0-9a-fA-F]{1,4}:){1,7}:|:([0-9a-fA-F]{1,4}:){1,7}|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4})$/;  
  const domainRegex = /^(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
  const hashRegex = /^([a-fA-F0-9]{32}|[a-fA-F0-9]{40}|[a-fA-F0-9]{64})$/;
  const cleanInput = encodeURIComponent(input);

  // ==========================================
  // DORK MODE
  // ==========================================

  if (input.toLowerCase().startsWith("dork:")) {

    const queryDork = input.substring(5).trim();

    if (!queryDork) {
      alert("No dork keyword detected");
      return;
    }

    runSmartDorks(queryDork);
    return;
  }

  // ==========================================
  // USERNAME MODE
  // ==========================================

  if (input.toLowerCase().startsWith("username:")) {

    let username = input.substring(9).trim();

    if (!username) {

      alert("No username detected");
      return;

    }

    if (username.startsWith("@")) {
      username = username.substring(1);
    }

    const u = encodeURIComponent(username);

    openTabs([
      `https://www.google.com/search?q=%22${u}%22`,
      `https://www.google.com/search?q=site:facebook.com+%22${u}%22`,
      `https://www.google.com/search?q=site:x.com+%22${u}%22`,
      `https://www.google.com/search?q=site:instagram.com+%22${u}%22`,
      `https://www.google.com/search?q=site:tiktok.com+%22${u}%22`,
      `https://www.google.com/search?q=site:youtube.com+%22${u}%22`,
      `https://www.google.com/search?q=site:linkedin.com+%22${u}%22`,
      `https://www.google.com/search?q=site:github.com+%22${u}%22`,
      `https://www.google.com/search?q=site:reddit.com+%22${u}%22`,
      `https://whatsmyname.app/?q=${u}`
    ]);
    return;
  }

  // ==========================================
  // EMAIL
  // ==========================================

  if (emailRegex.test(input)) {

    openTabs([
      `https://haveibeenpwned.com/account/${cleanInput}`,
      `https://www.google.com/search?q=%22${cleanInput}%22`,
      `https://hunter.io/search/${cleanInput}`,
      `https://emailrep.io/${cleanInput}`
    ]);
    return;
  }

  // ==========================================
  // IP ADDRESS
  // ==========================================

if (ipv4Regex.test(input) || ipv6Regex.test(input)) {

    openTabs([
      `https://www.virustotal.com/gui/ip-address/${cleanInput}`,
      `https://www.abuseipdb.com/check/${cleanInput}`,
      `https://www.shodan.io/host/${cleanInput}`,
      `https://ipinfo.io/${cleanInput}`,
      `https://iplocation.io/ip/${cleanInput}`,
      `https://whatismyipaddress.com/ip/${cleanInput}`,
      `https://bgp.he.net/ip/${cleanInput}`,
      `https://search.arin.net/rdap/?query=${cleanInput}`
    ]);
    return;
  }

  // ==========================================
  // HASH
  // ==========================================

  if (hashRegex.test(input)) {

    openTabs([
      `https://www.virustotal.com/gui/file/${cleanInput}`,
      `https://www.hybrid-analysis.com/search?query=${cleanInput}`,
      `https://bazaar.abuse.ch/browse.php?search=${cleanInput}`
    ]);
    return;
  }

  // ==========================================
  // DOMAIN / SUBDOMAIN
  // ==========================================

  if (domainRegex.test(input)) {

    openTabs([
      `https://www.virustotal.com/gui/domain/${cleanInput}`,
      `https://urlscan.io/domain/${cleanInput}`,
      `https://www.shodan.io/search?query=${cleanInput}`,
      `https://who.is/whois/${cleanInput}`,
      `https://viewdns.info/whois/?domain=${cleanInput}`,
      `https://securitytrails.com/domain/${cleanInput}/dns`
    ]);
    return;
  }

  // ==========================================
  // DEFAULT FALLBACK
  // ==========================================

  alert("Unknown input type");
}

// ==========================================
// GOOGLE DORKS
// ==========================================

function runSmartDorks(keyword) {

  const k = encodeURIComponent(keyword);

  const dorkUrls = [
    `https://www.google.com/search?q=%22${k}%22+leak`,
    `https://www.google.com/search?q=%22${k}%22+breach`,
    `https://www.google.com/search?q=%22${k}%22+password`,
    `https://www.google.com/search?q=%22${k}%22+database`,
    `https://www.google.com/search?q=%22${k}%22+malware`,

    `https://www.google.com/search?q=%22${k}%22+filetype:pdf`,
    `https://www.google.com/search?q=%22${k}%22+filetype:doc`,
    `https://www.google.com/search?q=%22${k}%22+filetype:docx`,
    `https://www.google.com/search?q=%22${k}%22+filetype:xls`,

    `https://www.google.com/search?q=%22${k}%22+ext:sql`,
    `https://www.google.com/search?q=%22${k}%22+ext:json`,
    `https://www.google.com/search?q=%22${k}%22+ext:log`,
    `https://www.google.com/search?q=%22${k}%22+ext:env`,
  ];

  const resultsContainer = document.getElementById("resultsContainer");
  const linksList = document.getElementById("linksList");

  if (resultsContainer && linksList) {

    linksList.innerHTML = "";
    resultsContainer.style.display = "block";

    dorkUrls.forEach(url => {

      const li = document.createElement("li");

      li.innerHTML = `
        <a href="${url}" target="_blank">
          ${url}
        </a>
      `;
      linksList.appendChild(li);
    });
  }

  dorkUrls.forEach((url, index) => {

    setTimeout(() => {

      window.open(url, "_blank");

    }, index * 700);
  });
}

// ==========================================
// REVERSE IMAGE SEARCH
// ==========================================

function openReverseImageSearch() {
  openTabs([
    `https://tineye.com`,
    `https://facecheck.id`,
    `https://pimeyes.com`
  ]);

}

// ==========================================
// IMAGE METADATA ANALYSIS
// ==========================================

function analyzeImageMetadata() {

  const fileInput = document.getElementById("imageInput");
  const resultsDiv = document.getElementById("exifResults");

  if (!fileInput.files || fileInput.files.length === 0) {
    alert("No files detected");
    return;
  }

  const file = fileInput.files[0];
  const fileType = file.type;

  const fileExtension = file.name.split('.').pop();

  if (fileType !== "image/jpeg" && fileType !== "image/jpg") {

    resultsDiv.style.display = "block";

    resultsDiv.innerHTML = `
      <strong>Format Error:</strong>
      .${fileExtension.toUpperCase()} is not supported for EXIF analysis.
    `;
    return;
  }

  EXIF.getData(file, function() {

    const allMetaData = EXIF.getAllTags(this);

    if (!allMetaData || Object.keys(allMetaData).length === 0) {

      resultsDiv.style.display = "block";

      resultsDiv.innerHTML = `
        <strong>Image without metadata:</strong>
        The file is clean. Social media platforms strip EXIF data automatically.
      `;
      return;
    }

    const make = allMetaData.Make || "unknown";
    const model = allMetaData.Model || "unknown";
    const date = allMetaData.DateTime || "not available";

    let htmlOutput = `
      <strong>Device:</strong> ${make} ${model}<br>
      <strong>Date:</strong> ${date}<br>
    `;

    if (allMetaData.GPSLatitude && allMetaData.GPSLongitude) {

      const latRef = allMetaData.GPSLatitudeRef || "N";
      const lonRef = allMetaData.GPSLongitudeRef || "E";

      const latDec = convertDMSToDD(
        allMetaData.GPSLatitude[0],
        allMetaData.GPSLatitude[1],
        allMetaData.GPSLatitude[2],
        latRef
      );

      const lonDec = convertDMSToDD(
        allMetaData.GPSLongitude[0],
        allMetaData.GPSLongitude[1],
        allMetaData.GPSLongitude[2],
        lonRef
      );

      htmlOutput += `
        <br>
        <strong style="color:#00ff00;">
          GPS Detected:
        </strong>
        ${latDec.toFixed(6)}, ${lonDec.toFixed(6)}
        <br>
        <a href="https://maps.google.com/?q=${latDec},${lonDec}" target="_blank">Google Maps</a>`;
    } else {

      htmlOutput += `
        <br>
        <strong>Geolocation:</strong>No GPS coordinates found.`;
    }

    resultsDiv.style.display = "block";
    resultsDiv.innerHTML = htmlOutput;
  });
}

// ==========================================
// GPS CONVERTER
// ==========================================

function convertDMSToDD(degrees, minutes, seconds, direction) {

  let dd = degrees + (minutes / 60) + (seconds / 3600);

  if (direction === "S" || direction === "W") {
    dd = dd * -1;
  }
  return dd;
}
