(() => {
  const form = document.querySelector('[data-quote-form]');
  if (!form) return;
  const status = form.querySelector('[data-form-status]');
  const submit = form.querySelector('[type="submit"]');
  const config = window.VF_CONFIG || {};
  const setStatus = (kind, message) => { status.className = `form-status show ${kind}`; status.textContent = message; };
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (form.elements.company_website.value.trim()) { setStatus('success','Thank you. Your request has been received.'); form.reset(); return; }
    const key = config.web3formsAccessKey || '';
    if (!key || key.includes('PASTE_')) {
      setStatus('error','The quote form is not connected yet. Victor Freight must add its Web3Forms access key in assets/js/config.js before publishing.');
      return;
    }
    const original = submit.innerHTML;
    submit.disabled = true; submit.innerHTML = 'Sending request…';
    const data = new FormData(form);
    data.append('access_key', key);
    data.append('subject', 'New Carrier Dispatch Request — Victor Freight Website');
    data.append('from_name', 'Victor Freight Website');
    data.append('replyto', form.elements.email.value);
    data.append('botcheck', '');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {method:'POST', body:data, headers:{'Accept':'application/json'}});
      const result = await response.json();
      if (response.ok && result.success) {
        setStatus('success','Your dispatch request has been sent successfully. A Victor Freight team member will reach out using the contact details you provided.');
        form.reset();
      } else {
        setStatus('error', result.message || result.error || 'We could not send your request. Please try again or contact Victor Freight by phone or email.');
      }
    } catch (error) {
      setStatus('error','A connection issue prevented submission. Please try again or contact Victor Freight directly.');
    } finally {
      submit.disabled = false; submit.innerHTML = original;
    }
  });
})();
