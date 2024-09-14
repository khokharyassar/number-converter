function convertFromText() {
    const text = document.getElementById("textInput").value;
    if (text !== '') {
        let binary = '', octal = '', decimal = '', hex = '';
        
        for (let i = 0; i < text.length; i++) {
            const asciiCode = text.charCodeAt(i);
            binary += asciiCode.toString(2).padStart(8, '0') + ' ';
            octal += asciiCode.toString(8) + ' ';
            decimal += asciiCode + ' ';
            hex += asciiCode.toString(16).toUpperCase() + ' ';
        }
        
        document.getElementById("binaryInput").value = binary.trim();
        document.getElementById("octalInput").value = octal.trim();
        document.getElementById("decimalInput").value = decimal.trim();
        document.getElementById("hexInput").value = hex.trim();
    } else {
        clearFields();
    }
}

function convertFromBinary() {
    const binary = document.getElementById("binaryInput").value;
    if (!/^[01\s]+$/.test(binary) && binary !== '') {
        alert("Invalid Binary Input");
        return;
    }

    const decimal = parseInt(binary.replace(/\s/g, ''), 2);
    if (!isNaN(decimal)) {
        document.getElementById("decimalInput").value = decimal;
        document.getElementById("octalInput").value = decimal.toString(8);
        document.getElementById("hexInput").value = decimal.toString(16).toUpperCase();
    } else {
        clearFields();
    }
}

function convertFromOctal() {
    const octal = document.getElementById("octalInput").value;
    if (!/^[0-7\s]+$/.test(octal) && octal !== '') {
        alert("Invalid Octal Input");
        return;
    }

    const decimal = parseInt(octal.replace(/\s/g, ''), 8);
    if (!isNaN(decimal)) {
        document.getElementById("decimalInput").value = decimal;
        document.getElementById("binaryInput").value = decimal.toString(2);
        document.getElementById("hexInput").value = decimal.toString(16).toUpperCase();
    } else {
        clearFields();
    }
}

function convertFromDecimal() {
    const decimal = document.getElementById("decimalInput").value;
    if (!/^[0-9\s]+$/.test(decimal) && decimal !== '') {
        alert("Invalid Decimal Input");
        return;
    }

    const num = parseInt(decimal.replace(/\s/g, ''), 10);
    if (!isNaN(num)) {
        document.getElementById("binaryInput").value = num.toString(2);
        document.getElementById("octalInput").value = num.toString(8);
        document.getElementById("hexInput").value = num.toString(16).toUpperCase();
    } else {
        clearFields();
    }
}

function convertFromHex() {
    const hex = document.getElementById("hexInput").value;
    if (!/^[0-9A-Fa-f\s]+$/.test(hex) && hex !== '') {
        alert("Invalid Hexadecimal Input");
        return;
    }

    const decimal = parseInt(hex.replace(/\s/g, ''), 16);
    if (!isNaN(decimal)) {
        document.getElementById("decimalInput").value = decimal;
        document.getElementById("binaryInput").value = decimal.toString(2);
        document.getElementById("octalInput").value = decimal.toString(8);
    } else {
        clearFields();
    }
}

function clearFields() {
    document.getElementById("binaryInput").value = '';
    document.getElementById("octalInput").value = '';
    document.getElementById("decimalInput").value = '';
    document.getElementById("hexInput").value = '';
}

function copyToClipboard(id, button) {
    const input = document.getElementById(id);
    input.select();
    document.execCommand('copy');
    const originalText = button.textContent;
    button.textContent = 'Copied';
    setTimeout(() => {
        button.textContent = originalText;
    }, 3000);
}