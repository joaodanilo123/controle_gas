//  :"2020-01-22T12:08:04.000Z"
// ->"22/01/2020 12:08" 
function formatDate(strDate = new Date().toISOString()) {
    const Y = strDate.slice(0, 4); 
    const M = strDate.slice(5, 7);
    const D = strDate.slice(8, 10);
    const H = strDate.slice(11, 16);

    return `${H} de ${D}/${M}/${Y}`
}

module.exports = formatDate;