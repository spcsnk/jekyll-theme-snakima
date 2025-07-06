document.addEventListener('DOMContentLoaded', function () {
  const listener = new Listener();

  listener.decode = function () {
    document.querySelectorAll('.obfuscated-content').forEach((el) => {
      const html = el.innerHTML;

      // Find username and svg
      const svg = el.querySelector('svg')?.outerHTML || '';
      const name = el.querySelector('.link-name')?.innerHTML || '';
      let rawUrl = el.querySelector('.link-href')?.textContent || '';
      if (!rawUrl) return;

      // Clean any [ at ] and [ dot ] and {{ }} style escaping
      const decodedName = name
            .replace(/\`\`\[\s+dot\s+\]\`\`/g, '.')
			.replace(/\`\`\[\s+at\s*\]\`\`/g, '@')
			.replace(/\`\`\{\s+(.*?)\s+\}\`\`/g, '$1');

      const decodedUrl = rawUrl
        .replace('#', decodedName)

      // Build the anchor
      const member = document.createElement('li');
      const link = document.createElement('a');
      link.href = decodedUrl;
      if (!svg && !name) {
        link.innerHTML = decodedUrl
      }
      else {
        link.innerHTML = `${svg} ${decodedName}`;
      }

      // Replace the original element
      member.appendChild(link);
      el.replaceWith(member);
    });
  };

  listener.on();
});

// Listener boilerplate
function Listener() {}
Listener.prototype.decode = null;
Listener.prototype.on = function () {
  this.listener = this.__onInteraction.bind(this);
  document.addEventListener('mouseenter', this.listener, true);
  document.addEventListener('focus', this.listener, true);
};
Listener.prototype.off = function () {
  document.removeEventListener('mouseenter', this.listener, true);
  document.removeEventListener('focus', this.listener, true);
  delete this.listener;
};
Listener.prototype.__onInteraction = function () {
  this.off();
  this.decode();
};
