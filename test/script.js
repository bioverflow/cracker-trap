// get notified when it's opened/closed or orientation changes
window.addEventListener('onDevToolsChange', function (e) {
  console.log(e.detail)

  if (e.detail.open) {
    document.querySelector('#banner').textContent = 'Your app may be hacked'
    document.querySelector('#banner').classList.remove('secure')
    document.querySelector('#banner').classList.add('hacked')
  } else {
    document.querySelector('#banner').textContent = 'Your app is hardened'
    document.querySelector('#banner').classList.remove('hacked')
    document.querySelector('#banner').classList.add('secure')
  }

  document.querySelector('#is-open').textContent = e.detail.open ? 'Yes' : 'No'
  document.querySelector('#orientation').textContent = e.detail.orientation
  document.querySelector('#is-undocked').textContent = e.detail.undocked ? 'Yes' : 'No'
})
