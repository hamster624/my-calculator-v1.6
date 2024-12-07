let E = x => new ExpantaNum(x);

function performOperation(operation) {
  const num1Str = document.getElementById("num1").value;
  const num2Str = document.getElementById("num2").value;

  // Convert strings to ExpantaNum
  const num1 = E(num1Str);
  const num2 = E(num2Str);
  let result;

  switch (operation) {
    case 'add':
      result = num1.add(num2);
      break;
    case 'subtract':
      result = num1.sub(num2);
      break;
    case 'multiply':
      result = num1.mul(num2);
      break;
    case 'divide':
      result = num1.div(num2);
      break;
    case 'exponentiate':
      result = num1.pow(num2);
      break;
    case 'tetrate':
      result = num1.tetr(num2);
      break;
    case 'pentate':
      result = num1.pentate(num2);
      break;
    case 'hexate':
      result = num1.hexate(num2);
      break;
    case 'heptate':
      result = num1.heptate(num2);
      break;
    case 'octate':
      result = num1.octate(num2);
      break;
    case 'nonate':
      result = num1.nonate(num2);
      break;
    case 'decate':
      result = num1.decate(num2);
      break;
    case 'unodecate':
      result = num1.unodecate(num2);
      break;
    case 'dodecate':
      result = num1.dodecate(num2);
      break;
    case 'tridocate':
      result = num1.tridocate(num2);
      break;
    case 'quadocate':
      result = num1.quadocate(num2);
      break;
    case 'quindecate':
      result = num1.quindecate(num2);
      break;
    case 'sedecate':
      result = num1.sedecate(num2);
      break;
    case 'septendecate':
      result = num1.septendecate(num2);
      break;
    case '1000arrow':
      result = num1.big(num2);
      break;
    case '10000arrow':
      result = num1.big2(num2);
      break;
    case '100000arrow':
      result = num1.big3(num2);
      break;
    case '1000000arrow':
      result = num1.big4(num2);
      break;
  }

  document.getElementById("result").textContent = `${notate(result, 2)}`;
}

function notate(expnum, fp) {
  const exp = E(expnum);

  if (exp.lt("1e6")) {
    return exp.toNumber().toFixed(fp);
  } else if (exp.lt("ee6")) {
    const base = exp.div(E(10).pow(exp.log10().floor())).toNumber().toFixed(2);
    const exponent = exp.log10().floor();
    return base + "e" + exponent;
  } else if (exp.slog(10).lt(1000000000000000) && exp.slog(10).gte(5)) {
    const count = Math.floor(exp.slog(10));
    return "e(" + count + ")" + 1;
  } else if (exp.lt("10^^1000000000000000")) {
    return "10^^" + notate(exp.slog(10), fp);
  } else {
    let str = exp.toHyperE();
    str = str.replace(/#0/g, '');
    str = str.replace(/(#1)+/g, (match, p1) => {
      const repeatCount = match.length / p1.length;
      if (repeatCount === 1) {
        return '';
      }
      return `(#1^${repeatCount})`;
    });

    return str;
  }
}
