//енум - это вспомогательная сущность которая позволяет лучше стурктурировать код, если присуствуют адаптивные
// элементы
enum Membership {
    Simple,
    Strandart,
    Premium
}

const membership = Membership.Strandart
console.log(membership) //вывкдет 1

const membershipReverse = Membership[2]
console.log(membershipReverse) //выведет Premium

enum SocialMedia {
    vk ="vk",
    facebook = 'facebook',
    instagram = 'instagram'
}
 const Social = SocialMedia.instagram
console.log(Social) //получит instagram,