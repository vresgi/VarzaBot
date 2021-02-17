module.exports.run = async (client, message, args) => {
    const dab = [
    `https://media.giphy.com/media/ordLtY9K29ZMk/giphy.gif`,
    `https://media.giphy.com/media/EMNE1CtIamUms/source.gif`,
    `https://media.giphy.com/media/3oKIPftfxXPwJFkvba/giphy.gif`,
    `https://media.giphy.com/media/3o7TKSsU7mNv8xbsHK/giphy.gif`,
    `https://media.giphy.com/media/l0K4mbH4lKBhAPFU4/giphy.gif`,
    `https://media1.tenor.com/images/9b2147e6ad5a8c7f0ae0f39d37230a56/tenor.gif?itemid=9672617`,
    `https://media.giphy.com/media/l4q85IhLTYdayg99e/giphy.gif`,
    `https://media1.tenor.com/images/d81af8d4f0a919c7b40e050de47e6eaf/tenor.gif?itemid=8063187`,
    `https://media.giphy.com/media/l3q2FOeVbpGSqHj4Q/giphy.gif`,
    `https://media.giphy.com/media/3oAt1YxUR009jDmSv6/giphy.gif`,
    `https://media.giphy.com/media/3oz8xzgGdsIpE8kPBu/giphy.gif`,
    `https://media.giphy.com/media/CQK3a6psGpcKk/giphy.gif`,
    `https://thumbs.gfycat.com/TotalBleakBarasinga-size_restricted.gif`,
    `https://media.giphy.com/media/BSWDs1DUqbMQw/giphy.gif`,
    `https://media1.tenor.com/images/befe68428b2299556c7c1046f90050fc/tenor.gif?itemid=4803482`,
    `https://media3.giphy.com/media/kkRfBeFJgpgNa/giphy.gif`,
    `http://emptynetsports.com/wp-content/uploads/2016/05/tevaun-smith-dab-gif.gif`,
    `https://i.makeagif.com/media/12-03-2015/MMAkBq.gif`,
    `https://ih1.redbubble.net/image.377129752.6411/pp,550x550.u4.jpg`,
    `https://ih1.redbubble.net/image.197242806.0385/ap,550x550,12x12,1,transparent,t.u2.png`,
    `https://res.cloudinary.com/teepublic/image/private/s--k8IxoXns--/t_Preview/b_rgb:0f7b47,c_limit,f_jpg,h_630,q_90,w_630/v1493210399/production/designs/1524968_1.jpg`,
    `https://media.dayoftheshirt.com/images/shirts/9KdGe/neatoshop_dabbing-panda-funny-shirt-dab-hip-hop-green_1506841884.full.png`,
    `https://ih0.redbubble.net/image.416146853.3061/ap,550x550,12x16,1,transparent,t.u2.png`
    ]

    const num = Math.floor(Math.random() * 24);
    message.channel.send(dab[num]);
};

module.exports.help = {
    name: "dab",
    aliases: [''],
    category: 'public',
    description: "Dab",
    cooldown: 5,
    usage: '',
};