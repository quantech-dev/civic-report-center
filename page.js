(function () {
  var op = window.CRC_OPERATOR || {};
  function each(sel, fn) { [].forEach.call(document.querySelectorAll(sel), fn); }
  each('[data-op="name"]', function (e) { e.textContent = crcOperatorName(); });
  each('[data-op="location-sentence"]', function (e) { e.textContent = op.location ? ', based in ' + op.location : ''; });
  each('[data-op="effectiveDate"]', function (e) { e.textContent = op.effectiveDate || ''; });
  each('[data-op="email-link"]', function (e) {
    e.textContent = op.email || '[contact email not set]';
    if (op.email) e.href = 'mailto:' + op.email;
  });
  each('[data-disc]', function (e) { e.textContent = crcDisclaimer(); });
})();
