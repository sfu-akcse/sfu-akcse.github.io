(function registerProjectHighlights(global) {
  const AKCSE = (global.AKCSE = global.AKCSE || {});
  const data = (AKCSE.data = AKCSE.data || {});

  data.projectHighlights = [
    {
      title: 'K-Connect Mentorship Pipeline',
      description:
        'Pairing upper-year mentors with first- and second-year mentees to help navigate co-op applications, research placements, and adjusting to campus life.',
      descriptionKo:
        '상급생 멘토와 1-2학년 멘티를 매칭하여 코업 지원, 연구 참여, 캠퍼스 적응을 지원합니다.',
      link: 'https://www.sfu.ca/students/mentorship.html',
    },
    {
      title: 'Innovation Bridge Project Teams',
      description:
        'Multidisciplinary student teams collaborate with Canadian and Korean partners to tackle sustainability and smart city challenges.',
      descriptionKo:
        '다학제 학생 팀이 캐나다·한국 파트너와 함께 지속 가능성과 스마트시티 과제를 해결합니다.',
      link: 'https://www.citylab.sfu.ca',
    },
    {
      title: 'Culture x STEM Community Showcase',
      description:
        'Annual showcase highlighting Korean-Canadian creatives and researchers who fuse storytelling, design, and technology.',
      descriptionKo:
        '스토리텔링, 디자인, 기술을 융합한 한인-캐나다 창작자와 연구자를 조명하는 연례 쇼케이스입니다.',
      link: 'https://www.sfu.ca/siat.html',
    },
  ];
})(window);
