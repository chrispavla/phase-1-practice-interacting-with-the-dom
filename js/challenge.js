// const value = document.querySelector('#counter')
// const minus = document.querySelector("#minus")
// const plus = document.querySelector("#plus")

// //See the timer increment every second once the page has loaded.
// function intervalCallback () {
//     value.textContent = parseInt(value.textContent) + 1

// }

// let variable = setInterval(intervalCallback, 1000)

// document.querySelector("#pause").addEventListener("click", () => {

//     if (document.querySelector("#pause").innerText === 'pause') {
//     minus.disabled = true
//     plus.disabled = true
//     heartButton.disabled = true
//     document.querySelector("#pause").innerText = "resume"
//     clearInterval(variable)
//     } else {
//         document.querySelector("#pause").innerText = "pause"
//         minus.disabled = false
//         plus.disabled = false
//         heartButton.disabled = false
//         setInterval(intervalCallback, 1000)
//     }

//  })

// minus.addEventListener("click", () => {

//     value.textContent = parseInt(value.textContent) - 1

//  })

//  plus.addEventListener("click", () => {

//     value.textContent = parseInt(value.textContent) + 1

//  })

// //Leave comments on my gameplay, such as: "Wow, what a fun game this is."

// let submitForm = document.querySelector("form")

// submitForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let input = e.target['comment-input'].value
//     let p = document.createElement('p')
//     document.querySelector()
//     p.textContent = e.target.value

// })
let form = document.querySelector("#comment-form");
let input = document.querySelector("#comment-input");
let h3 = document.querySelector("h3");
let list = document.querySelector("#list");
let counter = document.querySelector("#counter");
let minus_button = document.querySelector("#minus");
let plus_button = document.querySelector("#plus");
let heart_button = document.querySelector("#heart");
let pause_button = document.querySelector("#pause");
let submit_button = document.querySelector("#submit");
let likes_container = document.querySelector(".likes");

// Counter reset
let count = 0;
counter.textContent = count;

// (1) See the timer increment every second once the page has loaded.
let intervalCounter = setInterval(handleInterval, 1000);

function handleInterval() {
  count += 1;
  counter.textContent = count;
}

// (2) Manually increment and decrement the counter using the plus and minus buttons.

minus_button.addEventListener("click", () => {
  count -= 1;
  counter.textContent = count;
});

plus_button.addEventListener("click", () => {
  count += 1;
  counter.textContent = count;
});

// (3) "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
let likedTimesCount = 0;

heart_button.addEventListener("click", () => {
  let likedNumber = document.getElementById(`${counter.textContent}`);
  //   let likesLi = document.createElement("li");

  //   let likeTimes = document.createElement("span");
  //   console.log(likedNumber);
  likedTimesCount += 1;

  if (likedNumber === null) {
    let likesLi = document.createElement("li");
    likedTimesCount = 1;
    likesLi.id = `${counter.textContent}`;
    likesLi.textContent = `${counter.textContent} has been liked ${likedTimesCount} times`;
    likes_container.append(likesLi);
  } else {
    likedNumber.textContent = `${counter.textContent} has been liked ${likedTimesCount} times`;
  }

  //   likeTimes.textContent = ` ${likedTimesCount} time`;
  //   likesLi.textContent = `${counter.textContent} has been liked`;

  //   likes_container.append(likesLi);
  //   likesLi.append(likeTimes);
});

// (4) Pause the counter, which should:
// - pause the counter
// - disable all buttons except the pause button
// - switch the label on the button from "pause" to "resume"

pause_button.addEventListener("click", () => {
  if (pause_button.textContent === " pause ") {
    submit_button.disabled = true;
    heart_button.disabled = true;
    minus_button.disabled = true;
    plus_button.disabled = true;

    pause_button.textContent = "resume";

    clearInterval(intervalCounter);
  } else {
    pause_button.textContent = " pause ";

    submit_button.disabled = false;
    heart_button.disabled = false;
    minus_button.disabled = false;
    plus_button.disabled = false;

    intervalCounter = setInterval(handleInterval, 1000);
  }
});

// (5) Click the "restart" button to restart the counter and re-enable the buttons.

// (6) Leave comments on my gameplay, such as: "Wow, what a fun game this is."

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let p = document.createElement("p");
  p.textContent = input.value;
  list.append(p);
  form.reset();
});
