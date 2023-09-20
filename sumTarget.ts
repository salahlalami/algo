function twoSum(nums: number[], target: number): number[] {

    let result : number[] = [];
    
    const mapObj : { [index: string]: number } = {};

    for (let i:number = 0; i<nums.length; i++) {
        const x:number = target - nums[i];
        const j:number = mapObj[x];
        
        if (j != undefined){
         result = [i,j]
            break;
        }
        else{
        mapObj[nums[i]]= i;
        }
        
    }

    return result;



};


console.log("🚀 ~ file: sumTarget.ts:30 ~ twoSum([2,7,11,15],9):", twoSum([2,7,11,15],9))
