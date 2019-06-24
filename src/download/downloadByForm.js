/**
 * 以form表单形式下载文件
 * @param {String} url 
 * @param {Object} params 
 */
function downloadByForm(url, params) {
    const id = parseInt(Math.random() * Math.pow(10, 10));
    let iframe = document.createElement('iframe');
    iframe.setAttribute('id', id);
    iframe.setAttribute('name', id);
    iframe.setAttribute('style', 'display:none;');

    let form = document.createElement('form');
    form.setAttribute('style', 'display:none;');
    form.setAttribute('target', id);
    form.setAttribute('method', 'post');
    form.setAttribute('action', url);

    for (let key in params) {
        let input = document.createElement('input');
        input.setAttribute('name', key);
        input.setAttribute('value', params[key]);
        form.appendChild(input);
    }

    let body = document.querySelector('body');
    iframe.appendChild(form);
    body.appendChild(iframe);
    form.submit();
}

module.exports = downloadByForm;