import torch
import torch.nn as nn

class Layer_One_control(nn.Module):
    def __init__(self):
        super().__init__()
        # define your layers here
        self.conv1 = nn.Conv2d(12, 32, kernel_size=3, padding=1)
        self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)
        self.conv3 = nn.Conv2d(64, 128, kernel_size=3, padding=1)
        self.relu = nn.ReLU()
        self.flatten = nn.Flatten()
        self.fc1 = nn.Linear(128 * 8 * 8, 2048)
        self.dropout = nn.Dropout(0.3)
        self.fc2 = nn.Linear(2048, 4096)

    def forward(self, x):
        # define how data flows through the layers
        x = self.conv1(x)
        x = self.relu(x)

        x = self.conv2(x)
        x = self.relu(x)

        x = self.conv3(x)
        x = self.relu(x)

        x = self.flatten(x)

        x = self.fc1(x)
        x = self.relu(x)
        x = self.dropout(x)
        x = self.fc2(x)
        return x
    
class Layer_One_wide(nn.Module):
    def __init__(self):
        super().__init__()
        # define your layers here
        self.conv1 = nn.Conv2d(12, 64, kernel_size=3, padding=1)
        self.conv2 = nn.Conv2d(64, 128, kernel_size=3, padding=1)
        self.conv3 = nn.Conv2d(128, 256, kernel_size=3, padding=1)
        self.relu = nn.ReLU()
        self.flatten = nn.Flatten()
        self.fc1 = nn.Linear(256 * 8 * 8, 2048)
        self.dropout = nn.Dropout(0.3)
        self.fc2 = nn.Linear(2048, 4096)

    def forward(self, x):
        # define how data flows through the layers
        x = self.conv1(x)
        x = self.relu(x)

        x = self.conv2(x)
        x = self.relu(x)

        x = self.conv3(x)
        x = self.relu(x)

        x = self.flatten(x)

        x = self.fc1(x)
        x = self.relu(x)
        x = self.dropout(x)
        x = self.fc2(x)
        return x
    
class Layer_One_narrow(nn.Module):
    def __init__(self):
        super().__init__()
        # define your layers here
        self.conv1 = nn.Conv2d(12, 16, kernel_size=3, padding=1)
        self.conv2 = nn.Conv2d(16, 32, kernel_size=3, padding=1)
        self.conv3 = nn.Conv2d(32, 64, kernel_size=3, padding=1)
        self.relu = nn.ReLU()
        self.flatten = nn.Flatten()
        self.fc1 = nn.Linear(64 * 8 * 8, 2048)
        self.dropout = nn.Dropout(0.3)
        self.fc2 = nn.Linear(2048, 4096)

    def forward(self, x):
        # define how data flows through the layers
        x = self.conv1(x)
        x = self.relu(x)

        x = self.conv2(x)
        x = self.relu(x)

        x = self.conv3(x)
        x = self.relu(x)

        x = self.flatten(x)

        x = self.fc1(x)
        x = self.relu(x)
        x = self.dropout(x)
        x = self.fc2(x)
        return x

class Layer_One_deep(nn.Module):
    def __init__(self):
        super().__init__()
        # define your layers here
        self.conv1 = nn.Conv2d(12, 32, kernel_size=3, padding=1)
        self.conv2 = nn.Conv2d(32, 48, kernel_size=3, padding=1)
        self.conv3 = nn.Conv2d(48, 48, kernel_size=3, padding=1)
        self.conv4 = nn.Conv2d(48, 48, kernel_size=3, padding=1)
        self.conv5 = nn.Conv2d(48, 52, kernel_size=3, padding=1)
        self.relu = nn.ReLU()
        self.flatten = nn.Flatten()
        self.fc1 = nn.Linear(52 * 8 * 8, 2048)
        self.dropout = nn.Dropout(0.3)
        self.fc2 = nn.Linear(2048, 4096)

    def forward(self, x):
        # define how data flows through the layers
        x = self.conv1(x)
        x = self.relu(x)

        x = self.conv2(x)
        x = self.relu(x)

        x = self.conv3(x)
        x = self.relu(x)

        x = self.conv4(x)
        x = self.relu(x)

        x = self.conv5(x)
        x = self.relu(x)

        x = self.flatten(x)

        x = self.fc1(x)
        x = self.relu(x)
        x = self.dropout(x)
        x = self.fc2(x)
        return x

class Layer_One_shallow(nn.Module):
    def __init__(self):
        super().__init__()
        # define your layers here
        self.conv1 = nn.Conv2d(12, 228, kernel_size=3, padding=1)

        self.relu = nn.ReLU()
        self.flatten = nn.Flatten()
        self.fc1 = nn.Linear(228 * 8 * 8, 2048)
        self.dropout = nn.Dropout(0.3)
        self.fc2 = nn.Linear(2048, 4096)

    def forward(self, x):
        # define how data flows through the layers
        x = self.conv1(x)
        x = self.relu(x)

        x = self.flatten(x)

        x = self.fc1(x)
        x = self.relu(x)
        x = self.dropout(x)
        x = self.fc2(x)
        return x

