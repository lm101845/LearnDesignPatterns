/**
 * @Author liming
 * @Date 2024/1/22 11:01
 **/
//进入一个营销活动页面，会根据后端下发的不同 type ，前端页面展示不同的弹窗。
// async getMainData() {
//     try {
//         const res = await activityQuery(); // 请求后端数据
//         this.styleType = res.styleType;
//         if (this.styleType === STYLE_TYPE.Reward) {
//             this.openMoneyPop();
//         }else if (this.styleType === STYLE_TYPE.Waitreward) {
//             this.openShareMoneyPop();
//         } else if (this.styleType === STYLE_TYPE.Poster) {
//             this.openPosterPop();
//         } else if (this.styleType === STYLE_TYPE.Activity) {
//             this.openActivityPop();
//         } else if (this.styleType === STYLE_TYPE.Balance) {
//             this.openBalancePop();
//         } else if (this?.styleType === STYLE_TYPE.Cash) {
//             this.openCashBalancePop();
//         }
//     } catch (error) {
//         log.error(MODULENAME, '主接口异常', JSON.stringify(error));
//     }
// }

/**
 * 这个代码的话看了就想打人，未来新增一种弹窗类型的话，我们需要到 getMainData 内部去补一个 else if，一不小心可能就会影响到原有的逻辑，并且随着迭代函数会越来越大。但其实每种弹窗是相互独立的，我们并不关心其他弹窗的逻辑。
 *
 * 此时，就需要策略模式了。
 */


/**
 * 当出现很多 if else 或者 switch 的时候，我们就可以考虑是否能使用策略模式了。
 *
 * 通过策略模式，我们可以把策略从业务代码中抽离出来，未来扩展的话无需深入到业务代码修改，只需要新增需要的策略，不会使得业务代码变得越来越臃肿。
 *
 * 甚至策略模式也可以更好的进行复用，如果其他业务场景需要类似的策略，直接引入即可，和原有的业务相互独立。
 */
