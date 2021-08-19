import * as EmailValidator from "email-validator";

const SHOW_ERROR_MESSAGES = "show-error-message";

const form = document.querySelector(".form") as HTMLFormElement;
const username = document.querySelector(".username") as HTMLInputElement;
const email = document.querySelector(".email") as HTMLInputElement;
const password = document.querySelector(".password") as HTMLInputElement;
const password2 = document.querySelector(".password2") as HTMLInputElement;

form.addEventListener("submit", function (event: Event) {
    event.preventDefault();
    hideErrorMessages(this);
    checkForEmptyFields(username, email, password, password2);
    chekcEmail(email);
    checkEqualPasswords(password, password2);
    if (shouldSendForm(this)) this.submit();
});

function checkEqualPasswords(
    passwordOne: HTMLInputElement,
    passWordTwo: HTMLInputElement
) {
    if (passwordOne.value !== passWordTwo.value) {
        showErrorMessage(passwordOne, "Senhas não igual");
        showErrorMessage(passWordTwo, "Senha não bate");
    }
}

function chekcEmail(input: HTMLInputElement): void {
    if (!EmailValidator.validate(input.value)) {
        showErrorMessage(input, "Email está incorreto");
    }
}

function checkForEmptyFields(...input: HTMLInputElement[]): void {
    input.forEach((input) => {
        if (!input.value) {
            showErrorMessage(input, "Campo vazio");
        }
    });
}

function hideErrorMessages(form: HTMLFormElement): void {
    form.querySelectorAll("." + SHOW_ERROR_MESSAGES).forEach((e) =>
        e.classList.remove(SHOW_ERROR_MESSAGES)
    );
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
    const formFields = input.parentElement as HTMLDivElement;
    const errorMessage = formFields.querySelector(
        ".error-message"
    ) as HTMLDivElement;
    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
    let send = true;
    form.querySelectorAll("." + SHOW_ERROR_MESSAGES).forEach(
        () => (send = false)
    );
    return send;
}
