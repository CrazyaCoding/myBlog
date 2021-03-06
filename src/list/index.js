import React, { Component } from 'react';
import './index.scss';
class List extends Component {
	render() {
		return (
			<div className="list-wrap">
				<ul>
					<li>
						<p className="title">标题</p>
						<p className="subtit">概述这是关于 JOSE 和密码学的三篇系列文章中的最后一篇，你可以在下面的链接中找到其他部分： 基础 - 什么是 JWT 以及 JOSE 理论 - JOSE 中的签名和验证流程 实践 - 如何使用 Security.framework 处理 JOSE 中的验证 (本文)这一篇中，我们会在 JOSE 基础篇和理论篇的知识架构上，使用 iOS (或者说 Cocoa) 的相关框架来完成对 JWT 的解析，并利用 JWK 对它的签名进行验证。在最后，我会给出一些我自己在实现和学习这些内容时的...…</p>
						<p className="tag">2018-09-10更新（or创建）</p>
					</li>
					<li>
						<p className="title">标题</p>
						<p className="subtit">概述这是关于 JOSE 和密码学的三篇系列文章中的第二篇，你可以在下面的链接中找到其他部分： 基础 - 什么是 JWT 以及 JOSE 理论 - JOSE 中的签名和验证流程 (本文) 实践 - 如何使用 Security.framework 处理 JOSE 中的验证这一篇中，主要介绍网络传输的密钥的编码和处理方法，以及进行数字签名和验证的基本流程。我们在之后实践一篇里，会使用到这些知识。密钥的表现形式显然 JWK 是一种密钥的表现形式，它使用 JSON 的方式，遵守 JWA 的参数...…</p>
						<p className="tag">2018-09-10更新（or创建）</p>
					</li>
					<li>
						<p className="title">标题</p>
						<p className="subtit">我之前在专栏文章里曾经发布这篇文章，由于这个话题其实还是挺重要的，可以说代表了 Swift 今后发展的方向流派，所以即使和专栏文章内容有些重复，我还是想把它再贴到博客来。经过半年以后，自己对于这个问题也有了更多的实践和想法，所以同时也更新了一下。我没有直接改动原文，而是把新的想法和需要补充的说明，用类似这段话的引用的方式写在合适的上下文里。开始先打个广告我个人经常会在数码荔枝用优惠价格购买面向中国用户的一些软件，相比于花美金直接购买，价格非常实惠。近年来国内的正版风气和对知识知识产权的...…</p>
						<p className="tag">2018-09-10更新（or创建）</p>
					</li>
					<li>
						<p className="title">标题</p>
						<p className="subtit">假如我有时光机最近把工作上的事情忙完了，也把主机从美国换到了日本的机房，解决了国内的访问问题，所以准备开始好好重新拾掇一下，恢复定期更新 blog。其实我从大学时就有开始写 blog 的习惯了。不过不像最近的独立博客，那时候更多地是用新浪或者搜狐这样的平台，所以也就在那些地方也留下了不少“足迹”。既然是自己“存在过的证明”，我想可能还是把它们汇总一下，留个存档为好。于是就有了这篇和“技术”没什么关系的文章。这里面是我从 2006 年底到 2010 年三月期间的一些碎碎念，时间跨越从大二上半...…文</p>
						<p className="tag">2018-09-10更新（or创建）</p>
					</li>
					<li>
						<p className="title">标题</p>
						<p className="subtit">一直阅读我的博客的朋友可能知道，我在每年 WWDC 之后都会写 (水) 一篇关于新 SDK 和开发工具的文章。之前这个系列叫做《开发者所需要知道的 iOS SDK 新特性》，但是最近虽然 Craig 嘴上说着不要，身体却很诚实地将 iOS 和 macOS 带到一起，所以今年我觉得可以改一改题目，就总览一下作为 Apple 生态圈的开发者，在今年 WWDC 上我个人的一些观察，以及可能应该注意的有趣的地方。在会前，Apple 就已经放出消息要放慢增加新功能的脚步，转而提升软件稳定性和可靠性。...…</p>
						<p className="tag">2018-09-10更新（or创建）</p>
					</li>
				</ul>
			</div>
		);
	}
}

export default List;
