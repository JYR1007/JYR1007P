// 페이지 로드 시 실행
window.addEventListener('DOMContentLoaded', function() {
  const ham = document.querySelector('.ham');
  const mobileMenu = document.querySelector('.mobile_menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile_menu nav ul li a');

  // 햄버거 메뉴 클릭
  ham.addEventListener('click', function() {
    console.log('Ham clicked!'); // 디버깅용
    ham.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    // body 스크롤 막기/해제
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  // 모바일 메뉴 링크 클릭 시 메뉴 닫기
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      ham.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
});