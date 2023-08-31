document.getElementById('solve-button').addEventListener('click', function() {
    const a1 = math.fraction(document.getElementById('a1').value);
    const b1 = math.fraction(document.getElementById('b1').value);
    const c1 = math.fraction(document.getElementById('c1').value);
    
    const a2 = math.fraction(document.getElementById('a2').value);
    const b2 = math.fraction(document.getElementById('b2').value);
    const c2 = math.fraction(document.getElementById('c2').value);
    
    const determinant = math.subtract(math.multiply(a1, b2), math.multiply(a2, b1));
    const determinantX = math.subtract(math.multiply(c1, b2), math.multiply(c2, b1));
    const determinantY = math.subtract(math.multiply(a1, c2), math.multiply(a2, c1));
    
    const resultElement = document.getElementById('result');
    
    if (!math.equal(determinant, 0)) {
        const x = math.divide(determinantX, determinant);
        const y = math.divide(determinantY, determinant);
        
        const xFractional = math.format(x, { fraction: 'ratio' });
        const xDecimal = math.format(x, { notation: 'fixed', precision: 4 });
        
        const yFractional = math.format(y, { fraction: 'ratio' });
        const yDecimal = math.format(y, { notation: 'fixed', precision: 4 });
        
        resultElement.innerHTML = `Solution: x = ${xFractional} (${xDecimal}), y = ${yFractional} (${yDecimal})`;
    } else {
        resultElement.innerHTML = "No unique solution exists.";
    }
});
