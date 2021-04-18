import pickle
from datetime import datetime, timedelta


def initPickle():
    infoPickle = {"students":{"numOfStu":80,"gradRate6yr":89,"gradRate4yr":65,"firstGenCollege":30,'hoursMentoring':40},'info':{},'stats':{}}
    pickling_on = open("infographicPickle.pickle","wb")
    pickle.dump(infoPickle, pickling_on)
    pickling_on.close()

def seePickle():
    pickle_off = open("infographicPickle.pickle", 'rb')
    newPickle = pickle.load(pickle_off)
    print(newPickle)
    pickle_off.close()

def getPickle():
    pickle_off = open("infographicPickle.pickle", 'rb')
    newPickle = pickle.load(pickle_off)
    pickle_off.close()
    return newPickle

def postPickle(newJSON):
    pickling_on = open("infographicPickle.pickle","wb")
    pickle.dump(newJSON, pickling_on)
    pickling_on.close()
# def decrementTodaysTreat():
#     pickle_off = open("treatPickle.pickle", 'rb')
#     newTreatPickle = pickle.load(pickle_off)
#     newTreatPickle['treatsGivenToday'] += 1
#     pickle_off.close()

#     pickling_on = open("treatPickle.pickle","wb")
#     pickle.dump(newTreatPickle, pickling_on)
#     pickling_on.close()

# def canDispenseTreat():
#     pickle_off = open("treatPickle.pickle", 'rb')
#     newTreatPickle = pickle.load(pickle_off)
#     pickle_off.close()
#     dateLast = datetime.strptime(newTreatPickle['lastDate'], '%Y-%m-%d')
#     dateToday =datetime.strptime(str(datetime.now().date()),'%Y-%m-%d')

#     if dateToday.timestamp() > dateLast.timestamp():
#         newTreatPickle['lastDate'] = str(datetime.now().date())
#         newTreatPickle["treatsGivenToday"] = 0
#         pickling_on = open("treatPickle.pickle","wb")
#         pickle.dump(newTreatPickle, pickling_on)
#         pickling_on.close()

#     if newTreatPickle["treatsGivenToday"] <= newTreatPickle['maxNumOfTreatsPerDay']:
#         return True
#     else:
#         return False



# def waitForTreats(newPickle):
#     for i in range(len(newPickle["scheduledDispenseTreats"])):
#         scheduleTime = newPickle["scheduledDispenseTreats"][i]['time'].split(':')
#         dispenseTime = datetime(newPickle["scheduledDispenseTreats"][i]['scheduledDate'][0],newPickle["scheduledDispenseTreats"][i]['scheduledDate'][1],newPickle["scheduledDispenseTreats"][i]['scheduledDate'][2],int(scheduleTime[0]),int(scheduleTime[1]))
#         dateTimeNow = datetime.now()

#         if newPickle["scheduledDispenseTreats"][i]['freq'] == 'Tomorrow':
#             dispenseTime =+ timedelta(days=1)

#         diff = dispenseTime.timestamp() - dateTimeNow.timestamp()
#         if diff > 0:
#             time.sleep(diff)
#             dispenseTreat()


# def initVideoPickle():
#     video = {"videoNumber":0,"videoPaths":[]}
#     pickling_on = open("videoPickle.pickle","wb")
#     pickle.dump(video, pickling_on)
#     pickling_on.close()

# def seeVideoPickle():
#     pickle_off = open("videoPickle.pickle", 'rb')
#     newVideoPickle = pickle.load(pickle_off)
#     print(newVideoPickle)
#     pickle_off.close()

# def initTouchPickle():
#     treatPickle = {"singleton":0}
#     pickling_on = open("touchPickle.pickle","wb")
#     pickle.dump(treatPickle, pickling_on)
#     pickling_on.close()

# def getTouchPickle():
#     pickle_off = open("touchPickle.pickle", 'rb')
#     newTouchPickle = pickle.load(pickle_off)
#     pickle_off.close()
#     return newTouchPickle["singleton"]

# def setTouchPickle(value):
#     pickle_off = open("touchPickle.pickle", 'rb')
#     newTouchPickle = pickle.load(pickle_off)
#     newTouchPickle['singleton'] = value
#     pickle_off.close()

#     pickling_on = open("touchPickle.pickle","wb")
#     pickle.dump(newTouchPickle, pickling_on)
#     pickling_on.close()