(() => {
    const localeSet = {
        'en': {
            'headerTitle': 'Access Denied',
            'headerDescription': 'Your IP address is not allowed to access this website.',
        },
        'ko': {
            'headerTitle': '접근이 제한되었습니다.',
            'headerDescription': '현재 접속중인 IP 주소는 이 웹사이트에 접근할 수 없습니다.',
        }
    };

    const locale = localeSet[navigator.language] || localeSet['en'];

    let innerHTML = document.documentElement.innerHTML;
    for (let i in locale) {
        innerHTML = innerHTML.replaceAll(`{{${i}}}`, locale[i]);
    }
    document.documentElement.innerHTML = innerHTML;
}) ();