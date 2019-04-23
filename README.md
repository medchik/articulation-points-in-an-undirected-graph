# articulation-points-in-an-undirected-graph
finding articulation points in an undirecter-graph with O(n^3) complexity algorithm
# 1 Introduction
In mathematics, and particularly in graph theory, a point of articulation is a vertex of an undirected graph which, if removed from the graph, increases the number of connected components.
# 2 solution
The solution is to test the connectivity condition on each node, so for each node "i" we apply the DFS to extract the set of nodes accessible by "i" (connected component which contains "i") we note S1, after eliminating (i) set of nodes and applying the DFS on an element (j) in S1 such that j <> i We obtain a new connected component S2, so if S1 - {i} <> S2 then the point i is a point of articulation .


