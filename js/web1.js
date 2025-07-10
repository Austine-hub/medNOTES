document.addEventListener("DOMContentLoaded", function () {
  // Redirect Home button
  const homeButton = document.querySelector(".main-nav ul li:first-child a");
  if (homeButton) {
    homeButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "https://portal.jkuat.ac.ke/"; // Replace with your desired page
    });
  }

  // Helper: Close all dropdowns
  function closeAllDropdowns() {
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
      menu.style.display = "none";
    });
    document.querySelectorAll(".dropdown").forEach(dropdown => {
      dropdown.classList.remove("active");
    });
  }

  // Dropdown toggle logic
  document.querySelectorAll(".dropdown").forEach(dropdown => {
    const trigger = dropdown.querySelector("a");
    const menu = dropdown.querySelector(".dropdown-menu");
    if (!trigger || !menu) return;

    // Ensure menu is hidden initially
    menu.style.display = "none";

    // Click to toggle
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      const isActive = dropdown.classList.contains("active");

      closeAllDropdowns();

      if (!isActive) {
        dropdown.classList.add("active");
        menu.style.display = "block";
      }
    });

    // Hover in/out support (optional)
    dropdown.addEventListener("mouseenter", () => {
      if (!dropdown.classList.contains("active")) {
        menu.style.display = "block";
      }
    });
    dropdown.addEventListener("mouseleave", () => {
      if (!dropdown.classList.contains("active")) {
        menu.style.display = "none";
      }
    });
  });

  // Close all dropdowns when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      closeAllDropdowns();
    }
  });

  // Prevent closing when clicking inside the dropdown menu
  document.querySelectorAll(".dropdown-menu").forEach(menu => {
    menu.addEventListener("click", e => {
      e.stopPropagation();
    });
  });
});

// Identify nested dropdown menus and add an extra class for styling indentation
document.querySelectorAll(".dropdown-menu .dropdown-menu").forEach(nestedMenu => {
  nestedMenu.classList.add("nested-dropdown-menu");
});

// Identify nested dropdown menus and add a class for styling and positioning
document.querySelectorAll(".dropdown-menu .dropdown-menu").forEach(nestedMenu => {
  nestedMenu.classList.add("nested-dropdown-menu");
});

// Ensure clicks inside any dropdown menu don't close the menu
document.querySelectorAll(".dropdown-menu").forEach(menu => {
  menu.addEventListener("click", e => {
    e.stopPropagation();
  });
});


// JKUAT iMED link
const JKUATiMED = document.getElementById('JKUATiMED');
if (JKUATiMED) {
  JKUATiMED.addEventListener("click", function(e) {
    e.preventDefault();
    window.open(
      "https://drive.google.com/drive/folders/1kWMqdZRimUoT7vk9cxsnnoUGh9eacUbl",
      "_blank"
    );
  });
}

// JKUAT GenSurg link
const GenSurg  = document.getElementById('JKUATgenSurgery');
if ( GenSurg ) {
   GenSurg .addEventListener("click", function(e) {
    e.preventDefault();
    window.open(
      "https://drive.google.com/drive/folders/1ttdF1_zVihrlTnU8sjf8AhJ3lQgDKR7h",
      "_blank"
    );
  });
}


// JKUAT ObsGyn link
const JKUATortho = document.getElementById('JKUATortho');
if ( JKUATortho) {
   JKUATortho.addEventListener("click", function(e) {
    e.preventDefault();
    window.open(
      "https://drive.google.com/drive/folders/1lqirsfi38ukmiQfbvHq5ZovbId02_Fto",
      "_blank"
    );
  });
}


// JKUAT ObsGyn link
const JKUATobsgyn = document.getElementById('JKUATobgyn');
if ( JKUATobsgyn) {
   JKUATobsgyn.addEventListener("click", function(e) {
    e.preventDefault();
    window.open(
      "https://my.pcloud.com/#/filemanager?folder=26993163849",
      "_blank"
    );
  });
}

// Egerton iMED link
const EgertoniMED = document.getElementById('EgertoniMED');
if (EgertoniMED) {
  EgertoniMED.addEventListener("click", function(e) {
    e.preventDefault();
    window.open(
      "https://drive.google.com/drive/folders/YOUR_SECOND_FOLDER_ID",
      "_blank"
    );
  });
}


// KIIRIOBGYN link
const KIIRIobs = document.getElementById('kiiriobs');
if (KIIRIobs) {
  KIIRIobs.addEventListener("click", function(e) {
    e.preventDefault();
    window.open(
      "https://my.pcloud.com/#/filemanager?folder=26993163979",
      "_blank"
    );
  });
}

// Pyschiatry link
const Pyschiatry = document.getElementById('psych');
if (Pyschiatry) {
  Pyschiatry.addEventListener("click", function(e) {
    e.preventDefault();
    window.open(
      "https://my.pcloud.com/#/filemanager?folder=26993376327",
      "_blank"
    );
  });
}



// My Cardiology material link
const Dash1 = document.getElementById('dash1');
if (Dash1) {
  Dash1.addEventListener("click", function(e) {
    e.preventDefault();
    window.open(
      "https://my.pcloud.com/#/filemanager?folder=26994417662",
      "_blank"
    );
  });
}


// My Pulmonologist material link
const Dash2 = document.getElementById('dash2');
if (Dash2) {
  Dash2.addEventListener("click", function(e) {
    e.preventDefault();
    window.open(
      "https://my.pcloud.com/#/filemanager?folder=26994398871",
      "_blank"
    );
  });
}

// My Orthopaedic material link
const F1 = document.getElementById('f1');
if (F1) {
  F1.addEventListener("click", function(e) {
    e.preventDefault();
    window.open(
      "https://drive.internxt.com/folder/cc7cdabe-4e12-47e6-be6b-ad5a371327b5",
      "_blank"
    );
  });
}


// My IMED
const IMED = document.getElementById('Imed1');
if (IMED) {
  IMED.addEventListener("click", function(e) {
    e.preventDefault();
    window.open(
      "https://app.degoo.com/files/20674483062",
      "_blank"
    );
  });
}
