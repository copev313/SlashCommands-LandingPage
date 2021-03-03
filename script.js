/**
 * script.js
 * 
 * We utilize Handlebars JS to template our sites table contents.
 * @link https://handlebarsjs.com/
 */

window.onload = function() {

    // Grab the inline template (script element)
    const columnTemplate = document.getElementById("columnTemplate").innerHTML;
    const rowTemplate = document.getElementById("rowsTemplate").innerHTML;

    // Compile the template
    const compiled_header = Handlebars.compile(columnTemplate);
    const compiled_row = Handlebars.compile(rowTemplate);

    // Datastore
    const columnData = { cols: [ "Command Name", "Description", "Status", "Last Updated" ]};
    const rowsData = {
            datalist: [ {   name: "/APOD",
                            subName: "The Astronomy Picture of the Day",
                            img: "images/solar-system.png", 
                            alt: "solar system icon",
                            desc: "Returns a response card with NASA's Astronomy Picture of the Day.",
                            subDesc: "The card features the media and also links to NASA's offical website to read more.",
                            statusActive: 1, statusTesting: 0, statusDev: 0, statusFuture: 0,
                            lastUpdated: "February 16, 2021"
                        },

                        {   name: "/doggo",
                            subName: "Generate the power of a K-9",
                            img: "images/dog.png",
                            alt: "dog icon",
                            desc: "Returns a response card with a random pupper pic.",
                            subDesc: "The card will have the name of the dog breed and the cuteness.",
                            statusActive: 1, statusTesting: 0, statusDev: 0, statusFuture: 0,
                            lastUpdated: "February 19, 2021"
                        },

                        {   name: "/genius",
                            subName: "Get those song lyrics out of your head",
                            img: "images/songwriter.png",
                            alt: "lyrics icon",
                            desc: "",
                            subDesc: "",
                            statusActive: 0, statusTesting: 0, statusDev: 0, statusFuture: 1,
                            lastUpdated: ""
                        },

                        {   name: "/jokester",
                            subName: "Knock knock...",
                            img: "images/clown.png",
                            alt: "clown icon",
                            desc: "",
                            subDesc: "",
                            statusActive: 0, statusTesting: 0, statusDev: 0, statusFuture: 1,
                            lastUpdated: ""
                        },

                        {   name: "/mockdata",
                            subName: "Mock your data right to it's face",
                            img: "images/statistics.png",
                            alt: "statistics icon",
                            desc: "",
                            subDesc: "",
                            statusActive: 0, statusTesting: 0, statusDev: 0, statusFuture: 1,
                            lastUpdated: ""
                        },

                        {   name: "/roll",
                            subName: "Roll the dice!",
                            img: "images/dice.png",
                            alt: "dice icon",
                            desc: "Randomly generates a number to simulate a dice roll.",
                            subDesc: "Rolls a 6-sided die by default. Add arguments to advance your rolls (i.e. '/roll 3d7' will roll three 7-sided dice).",
                            statusActive: 0, statusTesting: 0, statusDev: 1, statusFuture: 0,
                            lastUpdated: "February 19, 2021"
                        },

                        {   name: "/shorty",
                            subName: "Cut your URLs down to size",
                            img: "images/",
                            alt: "xkcd ico",
                            desc: "",
                            subDesc: "",
                            statusActive: 0, statusTesting: 0, statusDev: 0, statusFuture: 1,
                            lastUpdated: ""
                        },

                        {   name: "/xkcd",
                            subName: "The XKCD Comic of the Day",
                            img: "images/xkcd.png",
                            alt: "xkcd icon",
                            desc: "Returns a response card with the XKCD comic of the day.",
                            subDesc: "The card includes the title of the comic and links to the offical site where the comic can be found.",
                            statusActive: 1, statusTesting: 0, statusDev: 0, statusFuture: 0,
                            lastUpdated: "February 19, 2021"
                        },

                        /* TEMPLATE OBJECT:

                        {   name: "",
                            subName: "",
                            img: "",
                            alt: "",
                            desc: "",
                            subDesc: "",
                            statusActive: 0, statusTesting: 0, statusDev: 0, statusFuture: 0,
                            lastUpdated: ""
                        },

                        */
    ]};

    // Pass data JSON into compiled templates
    const columnHTML = compiled_header(columnData);
    const rowsHTML = compiled_row(rowsData);

    // Select the HTML elements we want to add content to:
    let headersList = document.getElementById("headersList");
    let rowsList = document.getElementById("rowsList");

    // Overwrite the contents of rows with the renderer HTML
    headersList.innerHTML = columnHTML;
    rowsList.innerHTML = rowsHTML;
}
