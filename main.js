/*
    I need to turn the object below this comment into the template below.
    i will use a function with the computer as a parameter,
    ill use backticks to insert the values into a string,
    using \n and \t, and the proper html tags, i will format it to look
    like the example below,
    dont forget that the ID is inside the section tag

    <section id="computer--1">
        <h1>Apple Macbook</h1>
        <div>Model: Pro</div>
        <div>Memory: 32 GB</div>
        <div>Hard drive space: 500 GB</div>
        <div>Processor speed: 2.4 Ghz</div>
    </section>

    FOR SPECS
    its kind of hardcoded, at least to make it look like the example
    turn the specs object into an array of values
    just do it line by line with proper formatting
    such is life
*/

const convertComputerToHTML = (computerObject) => {

    const specsEntries = Object.values(computerObject.specs);

    const toHTML = `<section id="computer--${computerObject.id}">\n\t<h1>${computerObject.manufacturer} ${computerObject.make}</h1>\n\t<div>Model: ${computerObject.model}</div>\n\t<div>Memory: ${specsEntries[0]} GB</div>\n\t<div>Hard drive space: ${specsEntries[1]}</div>\n\t<div>Processor speed: ${specsEntries[2]} Ghz</div>\n</section>`;

    return toHTML;

}

const computer = {
    id: 1,
    manufacturer: "Apple",
    make: "Macbook",
    model: "Pro",
    specs: {
        memory: 32,
        hardDrive: "500 GB",
        processor: 2.4
    }
}

const computerInfo = convertComputerToHTML(computer);

console.log(computerInfo);