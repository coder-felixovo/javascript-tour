// strategy interface
interface LotteryStrategy {
  lottery(prizePoolCode: string) 
}

// concrete strategy class
class CommonLottery implements LotteryStrategy {
  lottery(prizePoolCode: string) {
    console.log(`普通抽奖: ${prizePoolCode}`)
  }
}

class VipLottery implements LotteryStrategy {
  lottery(prizePoolCode: string) {
    console.log(`VIP抽奖: ${prizePoolCode}`)
  }
}

class AgentLottery implements LotteryStrategy {
  lottery(prizePoolCode: string) {
    console.log(`代理人抽奖: ${prizePoolCode}`)
  }
}

// context class
class LotteryService {
  public lottery(strategy: CommonLottery | VipLottery | AgentLottery, prizePoolCode: string) {
    strategy.lottery(prizePoolCode)
  }
}

// Test
const lotteryService = new LotteryService()
lotteryService.lottery(new CommonLottery(), "P01")
lotteryService.lottery(new VipLottery(), "P02")
lotteryService.lottery(new AgentLottery(), "P03")