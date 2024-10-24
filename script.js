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
        title: "🎉Ideathon: Paper Presentation",
        details: "A paper presentation event focusing on current technology in the Engineering field.",
        rules: [ // Changed 'Rules' to 'rules'
            "Team Composition: A team should consist of a minimum of 1 member and a maximum of 4 members.",
            "Time Allocated: Each team has 5 minutes to present, including 4 minutes for the presentation and 1 minute for Q&A.",
            "Domain: The paper must be related to current technology in the Engineering field.",
            "Paper Format: Papers should adhere to the IEEE format.",
            "Submission: Each team must submit their PowerPoint presentation (PPT) during the registration process."
        ],
        date: "15/11/2024",
        venue: "UCEV"
    },
    "tech-post": {
        title: "📊 Tech Post: Poster Presentation",
        details: "Present a poster on technological innovations and concepts.",
        rules: [ // Changed 'Rules' to 'rules'
            "Clarity: Ensure the poster is easy to read from a distance.",
            "Structure: Follow a logical flow (title, introduction, methods, results, conclusions, references).",
            "Stationary: Necessary stationary items like pen, pencil, sketch, etc., should be brought by the participants.",
            "Visuals: Use graphs, charts, images, and diagrams effectively.",
            "Conciseness: Avoid overcrowding the poster with excessive text.",
            "Technical Content: Explain technical terms and concepts clearly.",
            "Design: Use engineering drawings, photographs, and color coding.",
            "Presentation: Be prepared to discuss technical aspects in detail.",
            "Audience Engagement: Tailor your presentation to the audience's interests.",
            "Q&A: Anticipate technical questions and provide clear answers."
        ],
        date: "15/11/2024",
        venue: "UCEV"
    },
    "bug-hunt": {
        title: "🔍 Bug Hunt: Debugging",
        details: "Debugging challenges to test your programming skills.",
        rules: [ // Changed 'Rules' to 'rules'
            "HackerRank Account: All participants must have a valid HackerRank account to enter the contest.",
            "Event Duration: The event will last exactly 1 hour and 30 minutes; no submissions will be accepted after the time limit expires.",
            "Code Debugging: Participants are required to debug the provided code snippets and submit correct solutions within the time frame.",
            "Programming Language Flexibility: While questions will be provided in Python, participants can solve them using any language they are proficient in, as long as it's available on the HackerRank platform."
        ],
        date: "15/11/2024",
        venue: "UCEV"
    },
    "linkup": {
        title: "🔗 Linkup: Connection",
        details: "A team-based event to solve connection puzzles.",
        rules: [ // Changed 'Rules' to 'rules'
            "Common Round: All teams will be shown 4 connections. The first four teams to solve these will move to Round 1.",
            "Round 1: Each of the four teams will be given 4 connections to solve.",
            "Round 2: The final two teams will be given 3 connections each.",
            "Buzzer Rule: The team that presses the buzzer first gets the right to answer. If their answer is correct, they score; if not, the opposing team gets a chance to answer."
        ],
        date: "15/11/2024",
        venue: "UCEV"
    },
    "mind-speak": {
        title: "🗣 MindSpeak: Dialogue Sharing",
        details: "Teams will discuss relevant topics in technology and share insights.",
        rules: [ // Changed 'Rules' to 'rules'
            "Max: 2 members",
            "Duration: 45 minutes",
            "Each team will have 15 minutes to present and 10 minutes for Q&A.",
            "At least three members should be in a team.",
            "Keep one arm's distance from your team members.",
            "Each member has 15 seconds to pass dialogue to team members.",
            "Rounds: Round 1: Tanglish dialogue, Round 2: Vernacular (Tamil Nadu), Round 3: Pure Tamil.",
            "Conditions: No one should touch the earphones. No actions should be performed."
        ],
        date: "15/11/2024",
        venue: "UCEV"
    },
    "verbo-clash": {
        title: "🗣️ Verbo Clash: Debate",
        details: "Engage in a structured debate on various topics.",
        rules: [ // Changed 'Rules' to 'rules'
            "Team Division: Participants will be divided into two teams: the Pessimistic team and the Optimistic team.",
            "Speaking Time: Each participant will have 1 minute to deliver their content.",
            "No Interruptions: Interruptions are to be avoided to ensure a smooth flow of discussion.",
            "Consistent Perspective: The team supporting the motion must maintain their viewpoint throughout the debate."
        ],
        date: "15/11/2024",
        venue: "UCEV"
    },
    "cyber-showdown": {
        title: "🎮 Cyber Showdown: E-Sports",
        details: "Teams will compete in popular E-Sports titles.",
        rules: [ // Changed 'Rules' to 'rules'
            "Max: 5 members",
            "Duration: Varies by game",
            "Winners will receive trophies and prizes!"
        ],
        date: "15/11/2024",
        venue: "UCEV"
    },
    "word-wave": {
        title: "Word Wave: Communication Challenge",
        details: "A communication challenge to test teamwork and clarity.",
        rules: [ // Changed 'Rules' to 'rules'
            "Team Composition: Each team must have at least three or more members.",
            "Spacing: Team members must maintain a one-arm distance from each other.",
            "Communication Setup: Earphones/headphones are used for each member.",
            "Dialogue Passing: Each member has 15 seconds to pass on the dialogue to the next teammate.",
            "Point System: Points are awarded based on how many words from the dialogue are successfully conveyed to teammates.",
            "General Conditions: No physical contact, no actions or gestures."
        ],
        date: "15/11/2024",
        venue: "UCEV"
    }
};


  

// Function to show event details in modal
function showEventDetails(eventElement) {
    const eventKey = eventElement.getAttribute('data-event-key');
    const event = events[eventKey];

    // Check if the event exists
    if (!event) {
        console.error(`Event with key "${eventKey}" does not exist.`);
        return; // Exit the function if the event is not found
    }

    // Get modal elements
    const modal = document.getElementById("eventModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalDate = document.getElementById("modalDate");
    const modalVenue = document.getElementById("modalVenue");
    const modalRules = document.getElementById("modalRules");

    // Set modal content
    modalTitle.innerHTML = event.title;
    modalDescription.innerText = event.details;
    modalDate.innerText = `Date: ${event.date}`;
    modalVenue.innerText = `Venue: ${event.venue}`;
    modalRules.innerHTML = "<strong>Rules:</strong><ul>" + event.rules.map(rule => `<li>${rule}</li>`).join("") + "</ul>";

    // Show modal
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
   
