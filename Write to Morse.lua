scriptId = 'com.thalmic.examples.outputeverything'
--file = io.open("/Users/Calvin/Desktop/myo-morse-messaging/test.txt", "w")

function onPoseEdge(pose, edge)
	if edge == "on" then
		if pose == "waveIn" then
			myo.vibrate("short")
			myo.keyboard("s","command")
		elseif pose == "waveOut" then
			myo.vibrate("short")
			myo.keyboard(" ", "press")
		elseif pose == "fingersSpread" then
			myo.vibrate("short")
			myo.keyboard("minus", "press")
		elseif pose == "fist" then
			myo.vibrate("short")
			myo.keyboard("period", "press")
		end
	end
end

function onPeriodic()
end

function onForegroundWindowChange(app, title)
    return true
end

function activeAppName() 
end

function onActiveChange(isActive)
end
