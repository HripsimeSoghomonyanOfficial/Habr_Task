// Function to handle the display of the file form
// Function to display the file form
function displayFileForm() {
    const fileFormHTML = `
        <div class="form-container">
            <form>
                <div class="displayflex">
                    <div>
                        <select id="system-type" name="system-type">
                            <option value="type1">Выберите тип системы</option>
                            <option value="type2">Выберите тип системы</option>
                            <option value="type3">Выберите тип системы</option>
                        </select>
                    </div>
                    <div>
                        <input type="email" id="email" name="email" placeholder="Ваш e-mail" required />
                    </div>
                    <div>
                        <input type="text" id="name" name="name" placeholder="Ваше имя" required />
                    </div>
                </div>
                <div>
                    <div class="displayflex">
                        <div>
                            <div class="displayflexr">
                                <label for="range">Sed ut perspiciatis, unde omnis iste natus</label>
                                <span style="margin-left: 10px;" id="range-value">75 %</span>
                            </div>
                            <input type="range" id="range" name="range" min="0" max="100" value="75" />
                        </div>
                        <label class="attach-file-button">       
                            <img src="./Icon/fileb.svg" alt="file">
                            Прикрепить файл
                            <input type="file" id="file-input" name="file" style="display:none;"/>
                        </label>
                    </div>
                </div>
                <button type="submit" class="submit">ОТПРАВИТЬ</button>
            </form>
        </div>
    `;

    const rootElement = document.getElementById("root");
    if (rootElement) {
        rootElement.innerHTML = fileFormHTML;

        // Add event listeners for range input and file input
        const rangeInput = document.getElementById("range");
        const rangeValue = document.getElementById("range-value");
        const fileInput = document.getElementById("file-input");

        if (rangeInput) {
            rangeInput.addEventListener("input", () => {
                rangeValue.textContent = `${rangeInput.value} %`;
            });
        }

        if (fileInput) {
            fileInput.addEventListener("change", () => {
                const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : "No file selected";
                alert(`Selected file: ${fileName}`);
            });
        }
    } else {
        console.error('Root element not found');
    }
}

document.addEventListener("DOMContentLoaded", displayFileForm);
document.getElementById("file").addEventListener("click", displayFileForm);

document.getElementById("search").addEventListener("click", () => {
    const formHTML = `
        <div class="form-container">
            <form id="search-form">
                <div class="displayflex">
                    <div>
                        <input type="text" id="search-query" name="search-query" placeholder="Search Google" required />
                        <button type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>
    `;
    document.getElementById("root").innerHTML = formHTML;

    document.getElementById("search-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const query = document.getElementById("search-query").value;
        const searchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = searchURL;
    });
});

document.getElementById("percent").addEventListener("click", () => {
    const percentFormHTML = `
        <div class="form-container">
            <h2>Percentage Details</h2>
            <p>Provide the percentage value here:</p>
            <input type="number" id="percent-value" placeholder="Enter percentage" />
            <button onclick="submitPercent()">Submit</button>
        </div>
    `;
    document.getElementById("root").innerHTML = percentFormHTML;
});

document.getElementById("mail").addEventListener("click", () => {
    const mailFormHTML = `
        <div class="form-container">
            <h2>Send Us an Email</h2>
            <form>
                <div class="displayflex">
                    <input type="email" id="mail-email" name="mail-email" placeholder="Your email" required />
                    <textarea id="mail-message" name="mail-message" placeholder="Your message" required></textarea>
                </div>
                <button type="submit">Send Email</button>
            </form>
        </div>
    `;
    document.getElementById("root").innerHTML = mailFormHTML;
});

document.getElementById("dollar").addEventListener("click", () => {
    const dollarFormHTML = `
        <div class="form-container">
            <h2>Dollar Amount</h2>
            <p>Enter the amount in dollars:</p>
            <input type="number" id="dollar-amount" placeholder="Enter amount" />
            <button onclick="submitDollar()">Submit</button>
        </div>
    `;
    document.getElementById("root").innerHTML = dollarFormHTML;
});

// Functions to handle form submissions
function submitPercent() {
    const percentValue = document.getElementById("percent-value").value;
    document.getElementById("root").innerHTML += `<p>Percentage submitted: ${percentValue}%</p>`;
}

function submitDollar() {
    const dollarAmount = document.getElementById("dollar-amount").value;
    document.getElementById("root").innerHTML += `<p>Dollar amount submitted: $${dollarAmount}</p>`;
}


