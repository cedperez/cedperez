const processSteps = [
  {
    label: "Discover",
    details: `<strong>Discover:</strong> I dive deep into your brand, its story, its strengths and challenges. This stage is about listening, research, and understanding what makes you unique.`,
    image: `<svg width="120" height="120" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="54" stroke="#A71E22" stroke-width="8" fill="#232323"/><path d="M60 40a20 20 0 1 1 0 40a20 20 0 1 1 0-40z" fill="#A71E22" opacity="0.7"/><path d="M60 60l20 20" stroke="#fff" stroke-width="6" stroke-linecap="round"/></svg>`
  },
  {
    label: "Design",
    details: `<strong>Design:</strong> I sketch, prototype, and shape until the visual rhythm feels right, elegant but with an edge. Every detail is intentional.`,
    image: `<svg width="120" height="120" viewBox="0 0 120 120" fill="none"><rect x="20" y="40" width="80" height="40" rx="12" fill="#A71E22" opacity="0.7"/><rect x="36" y="56" width="48" height="8" rx="4" fill="#fff"/><rect x="36" y="68" width="32" height="6" rx="3" fill="#fff" opacity="0.7"/></svg>`
  },
  {
    label: "Build",
    details: `<strong>Build:</strong> Ideas become real. I code and refine, bringing the design to life as beautifully and efficiently as possible.`,
    image: `<svg width="120" height="120" viewBox="0 0 120 120" fill="none"><rect x="28" y="36" width="64" height="48" rx="8" fill="#A71E22" opacity="0.7"/><rect x="40" y="52" width="40" height="8" rx="4" fill="#fff"/><rect x="40" y="66" width="24" height="6" rx="3" fill="#fff" opacity="0.7"/></svg>`
  },
  {
    label: "Launch",
    details: `<strong>Launch:</strong> The project goes live. I monitor, test, and ensure everything runs smoothly for users and stakeholders.`,
    image: `<svg width="120" height="120" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="54" stroke="#A71E22" stroke-width="8" fill="#232323"/><polygon points="60,36 80,84 60,72 40,84" fill="#fff"/><circle cx="60" cy="60" r="10" fill="#A71E22" opacity="0.7"/></svg>`
  },
  {
    label: "Evolve",
    details: `<strong>Evolve:</strong> Continuous improvement. I gather feedback, analyze data, and iterate to keep the experience fresh and effective.`,
    image: `<svg width="120" height="120" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="54" stroke="#A71E22" stroke-width="8" fill="#232323"/><path d="M60 40a20 20 0 1 1-20 20" stroke="#fff" stroke-width="6" fill="none"/><polygon points="60,28 68,44 52,44" fill="#A71E22"/></svg>`
  }
];

let currentStep = 0;

function updateProcessStepBox(step) {
  document.getElementById('process-step-details').innerHTML = processSteps[step].details;
  document.getElementById('process-step-image').innerHTML = processSteps[step].image;
}

function updateProcessBar(step) {
  const total = processSteps.length - 1;
  const percent = (step / total) * 100;
  const bar = document.getElementById('process-bar-gradient');
  const knob = document.getElementById('process-bar-knob');
  bar.style.width = percent + "%";
  knob.style.left = percent + "%";
}

document.addEventListener('DOMContentLoaded', () => {
  // Initial render
  updateProcessStepBox(currentStep);
  updateProcessBar(currentStep);

  // Make step labels clickable
  document.querySelectorAll('.process-steps-labels span').forEach((el, i) => {
    el.style.cursor = "pointer";
    el.onclick = () => {
      currentStep = i;
      updateProcessStepBox(currentStep);
      updateProcessBar(currentStep);
    };
  });
});