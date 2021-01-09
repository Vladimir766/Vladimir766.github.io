function empty() {
    if (document.form.name.value.length <= 1) {
        alert('Please enter your name!');
        document.form.name.focus();
    } else if (document.form.email.value.indexOf('@') < 0 || document.form.email.value.length <= 1) {
        alert('Please enter your email address!');
        document.form.email.focus();
    } else if (document.form.zip.value.length< 3 || document.form.zip.value.length > 5) {
        alert('Please enter your zip code!');
        document.form.zip.focus();
    } else {
        document.form.submit();

    }

}