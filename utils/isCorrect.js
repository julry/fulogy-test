const PHONE_NUMBER_LENGTH = 11;
const MIN_SURNAME_LENGTH = 2;


export const isPhoneCorrect = (number) => {
    if (!number) return false;
    const phoneRegexp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
    const length =  (number.match(/\d/g) || 0).length ;
    return !!(number.match(phoneRegexp)&&(length === PHONE_NUMBER_LENGTH));
}

export const isNameCorrect = (fullName) => {
    if (!fullName) return false;
    const nameRegexp =/^[a-zA-Z\s]*$/;
    const secondName = fullName.split(' ')[0] || '';
    const firstName = fullName.split(' ')[1] || '';
    return !!(secondName.length>=MIN_SURNAME_LENGTH && !!firstName && fullName.match(nameRegexp));
}


export const isEmailCorrect = (email) => {
    if (!email) return false;
    const emailRegexp = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/g;
    return !!email.match(emailRegexp);
}