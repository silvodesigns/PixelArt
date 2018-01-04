// Select color input
const color = document.getElementById("colorPicker");
// Select size input
const height = document.getElementById("input_height");
const width = document.getElementById("input_width");

// When size is submitted by the user, call makeGrid()
const form = document.getElementById("sizePicker");

form.addEventListener("submit", function makeGrid(e) {
        // Your code goes here!
        e.preventDefault();
        const canvas = document.getElementById("pixel_canvas");
        canvas.innerHTML = "";
        for (i = 0; i < height.value; i++) {
            const column = document.createElement("tr");
            for (r = 0; r < width.value; r++) {
                const toAdd = document.createElement("td");
                column.appendChild(toAdd);
            }
            canvas.appendChild(column);
        }

        const area = document.getElementsByTagName("td");
        //loop through every td and attach the following eventListener
        for (i = 0; i < area.length; i++) {
            area[i].addEventListener('click', function() {
                this.style.background = color.value;
            });


        }

    }

);