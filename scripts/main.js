document.querySelector('#deliveryForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  let address = document.querySelector('#address').value; 
  calculateDeliveryCost(address); 
});

function calculateDeliveryCost(address) {
  
  let cost = 100; 
  document.querySelector('#deliveryCost').textContent = 'Вартість доставки: ' + cost + ' грн';
   
}


const form = document.querySelector('#form');
const launchBtn = document.querySelector('#launch-btn');
const goToFormButton = document.querySelector('#go-to-form-btn');
const userEmailField = document.querySelector('#user-email');


goToFormButton.addEventListener('click', function (e) {
    e.preventDefault();
    form.scrollIntoView();
});

function clearFormFields() {
    const modalFiends = formModal.querySelectorAll('input');

    modalFiends.forEach( field => { 
        field.value = ''
    });
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    launchBtn.setAttribute('disabled', true)

    if (userEmailField?.value?.length > 30) {
        return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        showGooseAnim();

        setTimeout(() => {
            // launchBtn.removeAttribute('disabled')
            // clearFormFields();
        }, 2000);
      })
      .catch((error) => console.log('Sending form failed'));
})


