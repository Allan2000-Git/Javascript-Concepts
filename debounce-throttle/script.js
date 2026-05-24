const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

const updateDebounceText = debounce(() => {
    incrementCount(debounceText)
})
const updateThrottleText = throttle(() => {
    incrementCount(throttleText)
}, 100)

function debounce = (func, delay) => {
    let timeoutID = null;
    return function (...args) {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            timeoutID = null;
            func.apply(this, args);
        }, delay);
    };
}

function throttle(func, delay = 1000) {
  let isCalled = false;
  let timer;

  return function(...args){
    if (!isCalled) {
      func.apply(this, args);
      isCalled = true;
      clearTimeout(timer);
      timer = setTimeout(() => {
        isCalled = false;
      }, delay);
    }
  }
}

document.addEventListener("mousemove", e => {
    incrementCount(defaultText)
    updateDebounceText()
    updateThrottleText()
})

function incrementCount(element) {
    element.textContent = (parseInt(element.innerText) || 0) + 1
}
