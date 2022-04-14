document.addEventListener('DOMContentLoaded', function () {
  const block = document.querySelector('.block'),
    blockInfo = document.querySelector('.block-info'),
    blockItems = block.querySelectorAll('.block-item')
    blockInfoList = blockInfo.querySelector('.block-info-list');
  console.log(blockInfo);
  if (block) {
    // block.addEventListener('mousemove', function (e) {
      // const li = document.createElement('li');
      // li.classList.add('block-info-item');
      // li.innerText = `по иксу: ${e.clientX}, по игреку: ${e.clientY}`
      // blockInfoList.appendChild(li)
    // })

    blockItems.forEach((item) => {
      const content = item.querySelector('.block-item__content');

      item.addEventListener('mousemove', function (e) {
        let target = e.target.closest('.block-item');
        var targetCoords = target.getBoundingClientRect();
        var xCoord = e.clientX - targetCoords.left;
        var yCoord = e.clientY - targetCoords.top;

        content.style.display = 'block';
        content.style.transform = `translate(${ e.clientX > 1469? xCoord - 200 : xCoord + 40}px, ${yCoord - 20}px)`
      })

      item.addEventListener('mouseleave', function (e) {
        content.style.display = 'none';
      })
    })
  }
})