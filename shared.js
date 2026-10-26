document.addEventListener("DOMContentLoaded", () => {
  
  // 1. USER DATA
  const userName = localStorage.getItem("currentName") || "Customer";
  const userUID = localStorage.getItem("currentUID");
  
  const nameEl = document.getElementById("userNameDisplay");
  const displayNameEl = document.getElementById("displayName");
  const avatarEl = document.getElementById("userAvatar");
  const cardHolderEl = document.getElementById("cardHolderName");
  const navUserName = document.getElementById("navUserName");
  const navAvatar = document.getElementById("navAvatar");

  if (nameEl) nameEl.textContent = userName;
  if (displayNameEl) displayNameEl.textContent = userName.split(' ')[0];
  if (avatarEl) avatarEl.textContent = userName.charAt(0).toUpperCase();
  if (cardHolderEl) cardHolderEl.textContent = userName.toUpperCase();
  if (navUserName) navUserName.textContent = userName.split(' ')[0];
  if (navAvatar) navAvatar.textContent = userName.charAt(0).toUpperCase();

  // 2. HAMBURGER MENU LOGIC
  const sidebar = document.getElementById("sidebarMenu");
  const overlay = document.getElementById("overlay");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const closeBtn = document.getElementById("closeBtn");

  if (hamburgerBtn) {
    hamburgerBtn.onclick = () => {
      sidebar.classList.add("open");
      overlay.classList.add("active");
      document.body.classList.add("no-scroll");
    };
  }

  if (closeBtn) {
    closeBtn.onclick = () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
    };
  }

  if (overlay) {
    overlay.onclick = () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
    };
  }

  // 3. HIDE BALANCE LOGIC
  const toggleBalanceBtn = document.getElementById("toggleBalanceBtn");
  if (toggleBalanceBtn) {
    let isHidden = false;
    toggleBalanceBtn.onclick = () => {
      const balanceEl = document.getElementById("mainBalance");
      const eyeOpen = document.getElementById("eyeOpen");
      const eyeClosed = document.getElementById("eyeClosed");
      isHidden = !isHidden;

      if (isHidden) {
        balanceEl.textContent = "••••••";
        eyeOpen.style.display = "none";
        eyeClosed.style.display = "block";
      } else {
        balanceEl.textContent = "$" + Number(localStorage.getItem("currentBalance") || 24562.00).toLocaleString('en-US', {minimumFractionDigits: 2});
        eyeOpen.style.display = "block";
        eyeClosed.style.display = "none";
      }
    };
  }

  // 4. LOGOUT
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.onclick = () => {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("currentName");
      localStorage.removeItem("currentUID");
      window.location.href = "index.html";
    };
  }

});