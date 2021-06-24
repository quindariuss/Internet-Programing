/**
 * Adds an input element to the wrapper.
 * @param {element} wrapper Wrapper for inputs.
 */
var addInput = function (wrapper) {
  let inp = document.createElement("input");
  let p = document.createElement("p");
  let span = document.createElement("span");

  p.appendChild(inp);
  p.appendChild(span);
  wrapper.appendChild(p);
};

/**
 * Gets values from all inputs into an array.
 * @return {object}   Array of all values from inputs.
 */
var getValuesArray = function () {
  let allValues = [];

  document.querySelectorAll("input").forEach(function (inp) {
    allValues.push(inp.value);
  });

  return allValues;
};

/**
 * Given an array, distributes its values to inputs.
 * @param {object} arr   Array of values to set.
 */
var setInputValues = function (arr) {
  let inputs = document.querySelectorAll("input");

  for (let i = 0; i < inputs.length; ++i) {
    inputs[i].value = arr[i];
  }
};

/**
 * Removes last input.
 */
var removeInput = function () {
  // get all inputs in inp-wrap.
  var allElements = document.querySelector("#inp-wrap").querySelectorAll("p");

  try {
    // remove element
    allElements[allElements.length - 1].parentNode.removeChild(
      allElements[allElements.length - 1]
    );
  } catch (err) {
    console.warn(err);
  }
};

// #################### MAIN ####################

var main = function () {
  var addCellBtn = document.querySelector("#add-cell");
  var removeCellBtn = document.querySelector("#remove-cell");
  var sortBtn = document.querySelector("#sort");
  var allInputsWrap = document.querySelector("#inp-wrap");

  var dataArr = [];

  // add an input on click.
  addCellBtn.addEventListener("click", function () {
    addInput(allInputsWrap);
  });

  // remove an input on click.
  removeCellBtn.addEventListener("click", function () {
    removeInput();
  });

  // sort button click
  sortBtn.addEventListener("click", function () {
    dataArr = getValuesArray();
    dataArr = dataArr.sort();
    setInputValues(dataArr);
  });

  // as user enters something do some.
  document.querySelectorAll("#inp-wrap").forEach(function (parah) {
    parah.addEventListener("keyup", function (event) {
      if (event.target.tagName === "INPUT") {
        let relatedSpan = event.target.parentNode.querySelector("span");
        relatedSpan.textContent = event.target.value.length;
      } else {
        console.info("Keydown in p, but not in input.");
      }
    });
  });
};

main();
