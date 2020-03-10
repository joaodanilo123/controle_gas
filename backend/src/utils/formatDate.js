//  :"2020-01-22T12:08:04.000Z"
// ->"22/01/2020 12:08" 
function formatDate(strDate = Date) {
    
    const sliced = `${strDate}`.slice(3, 24).trim();
    const [M, D, Y, H] = sliced.split(" ");
    return `${H} de ${D}/${M}/${Y}`
}

module.exports = formatDate;