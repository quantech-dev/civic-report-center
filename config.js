// Civic Report Center: site settings.

// Supabase connection. These values are public by design.
// Data is protected by the database's row-level security rules.
var CRC_URL = 'https://vyuedrdwpuhcdjjmmssk.supabase.co';
var CRC_KEY = 'sb_publishable_t-if7UMQKN9oCPptd691ng_ikS4NpW2';

// Who runs the site. Fill these in before launch. They appear on the
// About page, the Privacy page and in the footer.
var CRC_OPERATOR = {
  name: 'John Ward',
  email: 'otisofo@gmail.com',
  location: 'Washington, DC, USA',
  effectiveDate: 'October 4, 2026'
};

function crcOperatorName() {
  return CRC_OPERATOR.name || '[operator name not set]';
}
function crcDisclaimer() {
  return 'Civic Report Center is an independent service run by ' + crcOperatorName() +
    '. It is not a government agency or law enforcement and is not affiliated with either. ' +
    'We never charge fees and cannot guarantee the recovery of lost money.';
}
