// Fade-in effect for sections
$(window).on('scroll', function() {
  $('.fade-in').each(function() {
      const elementTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();
      if (elementTop < windowBottom - 50) {
          $(this).addClass('visible');
      }
  });
});

// Scroll to Top/Bottom functionality
$(document).ready(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('#scrollToTop').fadeIn();
      } else {
          $('#scrollToTop').fadeOut();
      }
      if ($(this).scrollTop() < $(document).height() - $(window).height() - 200) {
          $('#scrollToBottom').fadeIn();
      } else {
          $('#scrollToBottom').fadeOut();
      }
  });

  $('#scrollToTop').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 600);
     setTimeout(launchConfetti, 600); 
  });

  $('#scrollToBottom').click(function() {
      $('html, body').animate({ scrollTop: $(document).height() }, 600);
     setTimeout(launchConfetti, 600); 
  });
});

// Event data object
const events = {
  "ideathon": {
      title: "Ideathon: Paper Presentation",
      details: `
          Max: 3 to 4 members<br>
          Time allotment: 10 to 12 minutes<br>
          Slides: Maximum of 10<br>
          Domain: Related to currently developing technologies
      `
  },
  "tech-post": {
      title: "Tech Post: Poster Presentation",
      details: `
          1) Team should contain minimum 3 to maximum 5 members.<br>
          2) Participants should bring necessities excluding the chart.<br>
          3) Duration: 1 hour.<br>
          4) Topic is oriented towards engineering concepts.<br>
          5) Smart devices are not allowed.<br>
          6) Participants can use sketch and color pencils.<br>
          7) Participants of one team should not discuss the same approach with other teams.
      `
  },
  "bug-hunt": {
      title: "Bug Hunt: Debugging",
      details: `
          Max: 2 members<br>
          Duration: 2 hours<br>
          Tasks involve identifying and fixing bugs in given code snippets.<br>
          Prizes for the fastest and most efficient teams!
      `
  },
  "linkup": {
      title: "Linkup: Connection",
      details: `
          Max: 3 members<br>
          Duration: 1 hour<br>
          Teams will participate in activities that promote networking and collaboration skills.<br>
          Each team will present their approach and learnings.
      `
  },
 "mind-speak": {
  title: "MindSpeak: Dialogue Sharing",
  details: `
      Max: 2 members<br>
      Duration: 45 minutes<br>
      Teams will discuss relevant topics in technology and share insights.<br>
      Each team will have 15 minutes to present and 10 minutes for Q&A.<br>
      <strong>Non-Technical Event</strong><br>
    <h4>Mind Speak Event Rules:</h4>
<ul class="custom-list">
    <li>At least three members should be in a team.</li>
    <li>Keep one arm's distance from your team members.</li>
    <li>Each member has 15 seconds to pass dialogue to team members.</li>
</ul>

<h4>Rounds:</h4>
<ul class="custom-list">
    <li>Round 1: Tanglish dialogue</li>
    <li>Round 2: Vernacular (Tamil Nadu)</li>
    <li>Round 3: Pure Tamil</li>
</ul>

<h4>Conditions:</h4>
<ul class="custom-list">
    <li>No one should touch the earphones.</li>
    <li>No actions should be performed.</li>
</ul>

  `
},
  "verbo-clash": {
      title: "Verbo Clash: Debate",
      details: `
          Max: 3 members<br>
          Duration: 1 hour<br>
          Topics will be provided on the spot, and teams will prepare and present their arguments.<br>
          A panel of judges will evaluate based on content, delivery, and teamwork.
      `
  },
  "cyber-showdown": {
      title: "Cyber Showdown: E-Sports",
      details: `
          Max: 5 members<br>
          Duration: Varies by game<br>
          Teams will compete in popular E-Sports titles.<br>
          Winners will receive trophies and prizes!
      `
  }
};

// Function to show event details in modal
function showEventDetails(eventItem) {
  const eventKey = eventItem.classList[1]; // Get the second class name as the key
  const eventData = events[eventKey]; // Retrieve the event data from the object

  if (eventData) {
      document.getElementById('modalTitle').innerText = eventData.title;
      document.getElementById('modalDescription').innerHTML = eventData.details; // Use innerHTML for formatting
 

      const modal = document.getElementById('eventModal');
      modal.style.display = 'block'; // Show the modal
  }
}

// Close the modal when the 'x' is clicked
document.querySelector('.close').onclick = function() {
  document.getElementById('eventModal').style.display = 'none';
};

// Close the modal when clicking outside of the modal
window.onclick = function(event) {
  const modal = document.getElementById('eventModal');
  if (event.target === modal) {
      modal.style.display = 'none';
  }
};
 function launchConfetti() {
            const duration = 1.5 * 1000; // 5 seconds duration
            const animationEnd = Date.now() + duration;
            const defaults = { 
                startVelocity: 30, 
                spread: 360, 
                ticks: 60, 
                zIndex: 9999, // Bring confetti to the top
                scalar: 2  // Increase the size of the particles
            };

            const interval = setInterval(function () {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                // Create a burst of confetti from random positions around the screen
                confetti(Object.assign({}, defaults, {
                    particleCount: 100, // Increase particle count for a more intense effect
                    spread: 360,        // Full circle spread
                    origin: {
                        x: Math.random(),  // Random horizontal position
                        y: Math.random()   // Random vertical position
                    }
                }));
            }, 250); // Launch confetti every 250 milliseconds
        }
window.onload = function() {
    launchConfetti();
};
   function requestNotificationPermission() {
            if (Notification.permission === "default") {
                Notification.requestPermission().then(permission => {
                    if (permission === "granted") {
                        console.log("Notification permission granted.");
                        showNotification(); // Show notification if permission is granted
                    } else {
                        console.log("Notification permission denied.");
                    }
                });
            } else if (Notification.permission === "granted") {
                showNotification(); // Show notification if permission was already granted
            }
        }

        // Function to show notification
        function showNotification() {
            const notificationTitle = "National Level Technical Symposium";
            const notificationBody = "Join us for the National Level Technical Symposium on [Date] at [Location].";

            const notification = new Notification(notificationTitle, {
                body: notificationBody,
                icon: 'https://example.com/icon.png' // Optional: Add an icon URL
            });

            notification.onclick = () => {
                window.open('https://example.com'); // Optional: URL to open on click
            };
        }

        // Function to check if notification has been shown before
        function checkAndShowNotification() {
            const hasNotified = localStorage.getItem('hasNotified');

            if (!hasNotified) {
                requestNotificationPermission();
                localStorage.setItem('hasNotified', 'true'); // Set flag to prevent future notifications
            } else {
                console.log("Notification has already been shown.");
            }
        }

        // Call the check function on page load
        window.onload = checkAndShowNotification;
