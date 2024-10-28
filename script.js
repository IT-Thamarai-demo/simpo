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
        Image:"paper.jpeg",
        title: "🎉 Kertas",
        details: "A paper presentation event focusing on current technology in the Engineering field.",
        rules: [ 
            "Each team can have up to 4 members.",
            "Teams have 5 minutes to present: 4 minutes for the presentation and 1 minute for Q&A.",
            "The paper must relate to current technology in the engineering field.",
            "Papers should follow the IEEE form",
            "Each team must submit their PowerPoint (PPT) During registration.",
        ]
    },
    "tech-post": {
        Image:"PosterPresentation.jpeg",
        title: "📊 Poster Presentation",
        details: "Present a poster on technological innovations and concepts.",
        rules: [ 
            "Individual Participation.",
            " Topics will be provided on the spot.",
            "Ensure the poster is readable from a distance.",
            "A3 sheets will be provided",
            "Follow a logical structure (Title, Introduction, Methods, Results, Conclusions, References) and use diagrams effectively.",
            "Bring necessary stationery like pens, pencils, and markers.",
        ],
        date: "15/11/2024",
        venue: "UCEV"
    },
    "bug-hunt": {
        Image:"bughunt 1.jpeg",
        title: "🔍  Debugging",
        details: "Debugging challenges to test your programming skills.",
        rules: [ 
            "A HackerRank account is required.",
            "C, Python, and Java programming languages are allowed.",
            "Scores will be assigned based on two criteria: the number of bugs successfully resolved and the total time taken to fix all issues in the code snippet.",
            "The top performer will be selected based on score "
        ],
        date: "15/11/2024",
        venue: "UCEV"
    },
    "linkup": {
        Image:"link.jpeg",
        title: "🔗 Linkup:",
        details: "A team-based event to solve connection puzzles.",
        rules: [ 
            "Maximum 3 members per team",
            "Teams compete to identify connections between related clues.",
            "The team with the more points advances to the next round.",
            "If the answering player is incorrect, the opposite team gains the point.",
            "The two teams with the highest scores in preliminary rounds advance to the final. Winner and runner-up are determined by final round scores."

        ],
        date: "15/11/2024",
        venue: "UCEV"
    },
   "mind-speak": {
    Image:"dialogue.jpeg",
    "title": "🗨️ WordWave",  // Changed icon
    "details": "Teams will discuss relevant topics in technology and share insights.",
    "rules": [ 
        "Each team must have at least three members.",
        "Team members should keep one-arm distance.",
        "One team member will try to pass off a dialogue and the others must identify it.",
        "Members must relay the dialogue within 15 seconds.",
        "No physical gestures or contact is allowed."
    ],
    "date": "15/11/2024",
    "venue": "UCEV"
},
"verbo-clash": {
    Image:"debate.jpeg",
    "title": "🗯️ Debate",  // Changed icon
    "details": "Engage in a structured debate on various topics.",
    "rules": [
        "The debate topic will be announced on the spot and participants will then be divided into two groups.",
        "Each person has 1 minute to deliver their content.",
        "Avoid interruptions while someone is speaking.",
        "Among the participants, the judges will announce two candidates with compelling arguments on the debate topic as the winner and runner-up."
    ],
    "date": "15/11/2024",
    "venue": "UCEV"
},

    "cyber-showdown": {
        Image:"esports.jpeg",
        title: "🎮E-Sports",
        details: "Teams will compete in popular E-Sports titles.",
        rules: [
            "Players will be separated as a batch of 10 members.",
            "At the end, Among all batches, Top 2 players with the Highest Scores will be announced as the Winner.",
            "Bring your own mobile and headphones",
            "Organizing commity will not be responsible for any network connectivity issues "
        ],
        date: "15/11/2024",
        venue: "UCEV"
    },
    
};


  

// Function to show event details in modal
function showEventDetails(eventElement) {
    const eventKey = eventElement.getAttribute('data-event-key');
    const event = events[eventKey];
    console.log(event)

    if (!event) {
        console.error(`Event with key "${eventKey}" does not exist.`);
        return;
    }

    const modal = document.getElementById("eventModal");
    const modalImage = document.getElementById("eventImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalRules = document.getElementById("modalRules");

    // Debugging the image path
    console.log("Image path:", event.Image);
    modalImage.src = event.Image; // Ensure this matches your JSON structure

    modalTitle.innerHTML = event.title;
    modalDescription.innerText = event.details;
    modalRules.innerHTML = "<strong>Rules:</strong><ul>" + event.rules.map(rule => `<li>${rule}</li>`).join("") + "</ul>";

    modal.style.display = "block";
}


// Event listener for close button
document.getElementById("closeModal").onclick = function() {
    document.getElementById("eventModal").style.display = "none"; // Close modal
};

// Example event listener for opening modal
document.querySelectorAll('.event-item').forEach(item => {
    item.onclick = function() {
        showEventDetails(this); // Show event details based on the clicked item
    };
});

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
// Function to handle adding the 'show' class to elements when they are in view
function fadeUpOnScroll() {
    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) { // Trigger when 80% of the element is visible
            el.classList.add('show');
        }
    });
}

// Trigger the function on scroll
window.addEventListener('scroll', fadeUpOnScroll);

// Trigger once on page load in case elements are already in view
// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add scroll event listener to add the visible class when scrolled into view
document.addEventListener("scroll", function () {
    const dateDetails = document.querySelector(".date-details");

    if (isInViewport(dateDetails)) {
        dateDetails.classList.add("visible"); // Make visible when in viewport
    } else {
        dateDetails.classList.remove("visible"); // Hide when out of viewport
    }
});
// Function to generate a random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the colors of the date-details div
function changeColors() {
    const dateDetails = document.getElementById('dateDetails');
    dateDetails.style.color = getRandomColor(); // Change font color
    dateDetails.style.backgroundColor = getRandomColor(); // Change background color
}

// Initial color setup
changeColors(); // Set initial colors

// Change colors every 2 seconds
setInterval(changeColors, 2000);







