export default function loadPage(name) {
    // open browser
    // type name
    // press enter
}

export default function hoverLink(name) {
    // hover over the link;
}

export default function clickButton(xpath) {
    // hovering over..
    //use xpath to navigate to the element
    const button  = driver.execute(xpath)
    button.click()
}
export default function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(100,56));
