const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn')
const result = document.getElementById('result');

const checking = (event) => {
  event.preventDefault();
  const value = textInput.value;
  const lower = value.toLowerCase();

  if (!value) {
    alert("Please input a value");
  } else {
    const filtered = lower.replace(/[^a-zA-Z0-9]/g, '');
    const reversed = filtered.split('').reverse().join('');

    result.innerHTML = `<p style="font-weight: 600; display: inline-block; color: rgb(93, 51, 0);">${value}</p> is ${(reversed === filtered) ? "a Palindrome" : "not a Palindrome"}`;
  }
}

checkBtn.addEventListener('click', checking);
